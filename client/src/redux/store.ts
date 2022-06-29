import { configureStore } from "@reduxjs/toolkit";
import clientsApi from "./services/clientsApi";
import cart from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    cart,
    [clientsApi.reducerPath]: clientsApi.reducer,
  },

  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(clientsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
