import { configureStore } from "@reduxjs/toolkit";
import { all } from "redux-saga/effects";

const devMode = process.env.NODE_ENV === "development";

import createSagaMiddleware from "@redux-saga/core";

// slices
import { venueSlice } from "./venue/venueSlice";

// generator functions
import { venueSagas } from "./venue/venueSaga";

function* rootSaga() {
  yield all([
    ...venueSagas,
    // add more sagas
  ]);
}
// creating saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if (devMode) {
  // middleware.push(logger);
}

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      [venueSlice.name]: venueSlice.reducer,
    },
    devTools: devMode,
    middleware: (): any => {
      return middleware;
    },
  });
  sagaMiddleware.run(rootSaga);
  return store;
};
