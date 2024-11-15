import { configureStore } from '@reduxjs/toolkit';
import orderFormReducer from "./features/orderFormSlice"

export const store = configureStore({
  reducer: {
    orderForm: orderFormReducer,
  },
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
