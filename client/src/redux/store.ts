import { configureStore } from "@reduxjs/toolkit";
import api from "./services/test";
import cart from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    cart,
    [api.reducerPath]: api.reducer,
  },

  middleware: (defaultMiddleware) => defaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
