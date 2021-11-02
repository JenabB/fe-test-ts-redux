import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { reducer } from "../features/user";

export const store = configureStore({
  reducer: {
    user: reducer
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
