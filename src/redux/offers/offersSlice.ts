import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  handleFulfilledGet,
  handlePendingGet,
  handleRejectedGet,
} from "../helpers/helpers";
import { Offer, getOffers } from "../operations";
import { offersInitialState } from "./offersInitialState";

export const offersSlice = createSlice({
  name: "offers",
  initialState: offersInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOffers.fulfilled, (state, action: PayloadAction<Offer[]>) =>
        handleFulfilledGet(state, action)
      )
      .addCase(getOffers.pending, handlePendingGet)
      .addCase(getOffers.rejected, (state, action) =>
        handleRejectedGet(state, action)
      );
  },
});

export const offersReducer = offersSlice.reducer;
