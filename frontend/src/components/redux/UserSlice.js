import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  user: null,
  access_token: '',
};

export const userSlice = createSlice({
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.message = action.payload.message;
      state.access_token = action.payload.access_token;
    },
    loginFail: (state, action) => {
      state.message = action.payload.message;
    },
  },
  name: 'userData',
});

export const { loginSuccess, loginFail } = userSlice.actions;

export default userSlice.reducer;
