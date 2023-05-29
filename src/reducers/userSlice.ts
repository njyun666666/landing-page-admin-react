import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'src/store';

interface UserState {
  isLogin: boolean;
}

const initialState: UserState = {
  isLogin: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const selectIsLogin = (state: RootState) => state.user.isLogin;
export default userSlice.reducer;
