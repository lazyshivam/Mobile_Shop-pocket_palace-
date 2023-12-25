// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    userType: null,
    loggedIn: false
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      console.log(state.user)
    },
    setUserType: (state, action) => {
      state.userType = action.payload;
    },
    setLoggedIn:(state,action) => {
        state.loggedIn = action.payload;
    }
  },
});

export const { setUser, setUserType,setLoggedIn } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectUserType = (state) => state.user.userType;
export const selectLoggedInState=(state)=>state.user.loggedIn;

export default userSlice.reducer;
