export interface UserModel {
  id: number;
  name: string;
}

export interface UserState {
  users: Array<UserModel>;
  isLoading: Boolean;
  error: String;
}
