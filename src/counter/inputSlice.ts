/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Article = {
  title:string,
  description:string
}

export const inputSlice = createSlice({
  name: 'input',
  initialState: {
    titleValue: '',
    descValue: '',
    articles: [] as Article[],
  },
  reducers: {
    inputTitleValue: (state, titleValue:PayloadAction<string>) => {
      state.titleValue = titleValue.payload;
    },

    inputDescValue: (state, descValue:PayloadAction<string>) => {
      state.descValue = descValue.payload;
    },
    addNewArticle: (state, articele:PayloadAction<Article>) => {
      state.articles.push(articele.payload);
      state.titleValue = '';
      state.descValue = '';
    },

  },
});

// Action creators are generated for each case reducer function
export const { inputTitleValue, inputDescValue, addNewArticle } = inputSlice.actions;

export default inputSlice.reducer;
