import { Offer, OffersState } from "./operations";

export const selectOffers = (state: { offers: OffersState }): Offer[] =>
  state.offers.items;

export const selectIsLoading = (state: { offers: OffersState }) =>
  state.offers.isLoading;
export const selectError = (state: { offers: OffersState }) =>
  state.offers.error;
