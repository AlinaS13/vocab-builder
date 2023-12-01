export const selectAllWords = (state) => state.words.allWords;

export const selectCategories = (state) => state.words.categories;

export const selectStatistics = (state) => state.words.statistics;

export const selectUserWords = (state) => state.words.userWords;

export const isLoadingWords = (state) => state.words.isLoading;

export const selectIsModalAddWordOpen = (state) =>
  state.words.isModalAddWordOpen;

export const selectTasks = (state) => state.words.tasks;
export const selectTasksCount = (state) => state.words.tasks.length;

export const selectTasksAnswers = (state) => state.words.tasksAnswers;
