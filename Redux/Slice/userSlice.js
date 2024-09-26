import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: [],
    editUser: {
      user: {},
      isUpdate: false,
    },
  },
  reducers: {
    addUsers: (state, action) => {
      return {
        ...state,
        userData: [...state.userData, action.payload],
      };
    },
    deleteUser: (state, action) => {
      const id = action.payload;
      const data = [...state.userData];
      data.splice(id, 1);
      return {
        ...state,
        userData: data,
      };
    },
    updateUser: (state, action) => {
      return {
        ...state,
        editUser: {
          user: action.payload,
          isUpdate: true,
        },
      };
    },
    editUserData: (state, action) => {
      const { id, data } = action.payload;
      const info = [...state.userData];
      info.splice(id, 1, data);
      return {
        ...state,
        userData: info,
        editUser: {
          user: {},
          isUpdate: false,
        },
      };
    },
  },
});

export const { addUsers, deleteUser, updateUser, editUserData } =
  userSlice.actions;
export default userSlice.reducer;
