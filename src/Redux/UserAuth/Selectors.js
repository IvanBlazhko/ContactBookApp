export const getUserInfo = state => state.auth.user;

export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getIsRefreshing = state => state.auth.isRefreshing;

export const getError = state => state.auth.error;

export const getToken = state => state.auth.token;
