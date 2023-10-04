export const selectAllWords = (state) => state.words.all;

export const selectCategories = (state) => state.words.categories;

export const selectStatistics = (state) => state.words.statistics;

export const selectUserWords = (state) => state.words.userWords;

export const isLoadingWords = (state) => state.words.isLoading;
