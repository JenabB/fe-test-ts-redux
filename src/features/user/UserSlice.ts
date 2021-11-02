import {
  ActionReducerMapBuilder,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import axios from "axios";
import { UserState } from "./UserModel";

const initialState: UserState = {
  users: [
    { id: 1, name: "Fake" },
    { id: 2, name: "Data" },
  ],
  isLoading: false,
  error: "",
};

const loadUsers = createAsyncThunk(
  "users/loadUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:3010/users");
      return response.data;
    } catch (ex: any) {
      return rejectWithValue(ex.message);
    }
  }
);

const addUser = createAsyncThunk(
  "users/addUser",
  async (user: any, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:3010/users", user);
      return response.data;
    } catch (ex: any) {
      return rejectWithValue(ex.message);
    }
  }
);

const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id: any, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`http://localhost:3010/users/${id}`);
      return response;
    } catch (ex: any) {
      return rejectWithValue(ex.message);
    }
  }
);

const extraReducers = (builder: ActionReducerMapBuilder<UserState>) => {
  //load users
  builder.addCase(loadUsers.pending, (state: any, action) => {
    state.isLoading = true;
  });
  builder.addCase(loadUsers.fulfilled, (state: any, action) => {
    state.isLoading = false;
    state.users = action.payload;
  });
  builder.addCase(loadUsers.rejected, (state: any, action) => {
    state.isLoading = false;
    state.error = action.payload;
  });

  //add user
  builder.addCase(addUser.pending, (state: any, action) => {
    state.isLoading = true;
  });
  builder.addCase(addUser.fulfilled, (state: any, action) => {
    state.isLoading = false;
    state.users = [...state.users, action.payload];
  });
  builder.addCase(addUser.rejected, (state: any, action) => {
    state.isLoading = false;
    state.error = action.payload;
  });

  //delete user
  builder.addCase(deleteUser.pending, (state: any, action) => {
    state.isLoading = true;
  });
  builder.addCase(deleteUser.fulfilled, (state: any, action) => {
    state.isLoading = false;
    state.users = state.users.filter(
      (user: any) => user.id !== action.meta.arg
    );
  });
  builder.addCase(deleteUser.rejected, (state: any, action) => {
    state.isLoading = false;
    state.error = action.payload;
  });
};

const userSlice: any = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers,
});

export const actions = { loadUsers, addUser, deleteUser, ...userSlice.actions };

export default userSlice.reducer;
