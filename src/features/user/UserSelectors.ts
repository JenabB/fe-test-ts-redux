import { createSelector } from "reselect";
import { UserState } from "./UserModel";

const selectRoot = (state: any) => state.user;

export const selectUsers = createSelector(selectRoot, (state: UserState) => {
  return state.users;
});
