import { configureStore } from "@reduxjs/toolkit";
import cart from "./slices/cartSlice";
import clientsApi from "./services/clientsApi";
import coordinatesApi from "./services/coordinatesApi";

const store = configureStore({
  reducer: {
    cart,
    [clientsApi.reducerPath]: clientsApi.reducer,
    [coordinatesApi.reducerPath]: coordinatesApi.reducer,
  },

  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(clientsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
