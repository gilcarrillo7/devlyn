import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import uiReducer from "./features/ui/uiSlice";
import contactReducer from "./features/api/contactSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    contact: contactReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
