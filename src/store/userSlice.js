import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  name: '',
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn(state, action) {
      const { email, password } = action.payload;
      state.isLoggedIn = true;
      state.email = email;
      state.name = 'User';
    },
    signUp(state, action) {
      const { name, email, password } = action.payload;
      state.isLoggedIn = true;
      state.name = name;
      state.email = email;
    },
    signOut(state) {
      state.isLoggedIn = false;
      state.name = '';
      state.email = '';
    },
    updateUser(state, action) {
      const { name, email } = action.payload;
      state.name = name;
      state.email = email;
    },
    checkUserLogin(state) {
      // Check local storage or some other method to verify if user is logged in
      // For simplicity, this example assumes user is always not logged in
      state.isLoggedIn = false;
    },
  },
});

export const { signIn, signUp, signOut, updateUser, checkUserLogin } = userSlice.actions;
export default userSlice.reducer;
