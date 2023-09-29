export const getisAuth = (state) => Boolean(state.auth.token);
export const testGetisAuth = (state) => state.auth.isAuth;
export const getUserName = (state) => state.auth.name;
export const getToken = (state) => state.auth.token;
export const selectIsModalOpen = (state) => state.auth.isModalOpen;
