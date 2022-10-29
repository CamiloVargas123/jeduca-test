
import { combineReducers } from '@reduxjs/toolkit';

import { default as user } from './user';
import { default as article } from './article';

const rootReducer = combineReducers({
  user,
  article
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;