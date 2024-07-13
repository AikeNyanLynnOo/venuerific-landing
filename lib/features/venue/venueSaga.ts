import { call, put, takeLatest, race, delay, select } from "redux-saga/effects";

const TIMEOUT_SEC = parseInt(process.env.NEXT_PUBLIC_TIMEOUT_SEC || "10", 10);

// api
import { getVenues } from "@/lib/helpers/apiFunctions";

// actions
import {
  getVenuesRequest,
  getVenuesLoading,
  getVenuesSuccess,
  getVenuesFail,
} from "./venueSlice";
import { PayloadAction } from "@reduxjs/toolkit";

// grouping and exporting all venue sagas
export const venueSagas = [
  takeLatest(getVenuesRequest.type, watchGetVenuesRequest),
];

function* watchGetVenuesRequest(action: PayloadAction<any>) {
  const { payload } = action;
  try {
    yield put(getVenuesLoading(payload));

    // preventing long loading
    // fallback after 10s
    const { response, timeout } = yield race({
      response: call(getVenues, payload),
      timeout: delay(TIMEOUT_SEC * 1000),
    });
    const { status, success, message, data } = response;

    if (success) {
      // success
      // put user feedback

      yield put(
        getVenuesSuccess({
          venues: data.venues,
        })
      );
    } else {
      yield put(
        getVenuesFail({
          message:
            (message &&
              ((typeof message === "string" && message) ||
                Object.values(message).join(" "))) ||
            null,
        })
      );
    }
  } catch (e) {
    // put some user feedback
    // fail
    yield put(
      getVenuesFail({
        message: null,
      })
    );
  }
}
