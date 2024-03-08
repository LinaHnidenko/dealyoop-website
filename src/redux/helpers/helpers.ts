import { PayloadAction } from "@reduxjs/toolkit";
import { ErrorResponse, Offer, OffersState } from "../operations";

export const handlePendingGet = (state: OffersState): void => {
  state.isLoading = true;
};

export const handleFulfilledGet = (
  state: OffersState,
  action: PayloadAction<Offer[]>
): void => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

export type RejectedPayloadAction = PayloadAction<
  ErrorResponse | undefined,
  string,
  { rejectValue: ErrorResponse }
>;

export const handleRejectedGet = (
  state: OffersState,
  action: PayloadAction<any>
): void => {
  state.isLoading = false;
  state.error = action.payload || null;
};
