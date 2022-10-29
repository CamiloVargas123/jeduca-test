
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EmptyUserState, User } from 'src/models';
import { RootState } from '../stores';

export const userState = createSlice({
  name: 'user',
  initialState: EmptyUserState,
  reducers: {
    createUser: (_, action: PayloadAction<User>) => {
      return action.payload;
    },
    modifyUser: (state, action: PayloadAction<Partial<User>>) => {
      return { ...state, ...action.payload }
    },
    logoutUser: () => {
      return EmptyUserState
    }
  }
})

export const { createUser, modifyUser, logoutUser } = userState.actions;
export const selectUserData = (state: RootState) => state.user
export default userState.reducer;