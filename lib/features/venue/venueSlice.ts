import { createSlice } from "@reduxjs/toolkit";
import { VenueState } from "../../types/venueTypes";

const initialState: VenueState = {
  venues: [],
  loading: {
    isPending: null,
    isComplete: true,
  },
  isSuccess: null,
  error: {
    message: null,
  },
};

export const venueSlice = createSlice({
  name: "venue",
  initialState,
  reducers: {
    getVenuesRequest(state, action) {
      // run middleware
    },
    getVenuesLoading(state, action) {
      return {
        ...state,
        loading: {
          isPending: true,
          isComplete: false,
        },
      };
    },
    getVenuesSuccess(state, action) {
      return {
        ...state,
        loading: {
          isPending: false,
          isComplete: true,
        },
        venues: action.payload.venues,
        isSuccess: true,
        error: {
          message: null,
        },
      };
    },
    getVenuesFail(state, action) {
      return {
        ...state,
        loading: {
          isPending: false,
          isComplete: true,
        },
        isSuccess: false,
        error: {
          message: action.payload.message || null,
        },
      };
    },
    resetVenue(state, action) {
      return {
        ...state,
        loading: {
          isPending: null,
          isComplete: null,
        },
        venues: [],
        isSuccess: null,
        error: {
          message: null,
        },
      };
    },
  },
});

export const {
  getVenuesRequest,
  getVenuesLoading,
  getVenuesSuccess,
  getVenuesFail,
  resetVenue,
} = venueSlice.actions;
export default venueSlice.reducer;
