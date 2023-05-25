export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectStatusError = state => state.auth.statusError;

export const selectIsRefreshing = state => state.auth.isRefreshing;
