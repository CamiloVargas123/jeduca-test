
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Articles, EmptyArticles } from 'src/models';
import { RootState } from '../stores';

export const articleState = createSlice({
  name: 'articles',
  initialState: EmptyArticles,
  reducers: {
    addArticle: (_, action: PayloadAction<Articles[]>) => {
      return action.payload;
    }
  }
})

export const { addArticle } = articleState.actions;
export const selectArticles = (state: RootState) => state.article
export default articleState.reducer;