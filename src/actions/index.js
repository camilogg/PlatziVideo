export const setFavorite = payload => ({
  type: 'SET_FAVORITE',
  payload,
})

export const deleteFavorite = payload => ({
  type: 'DELETE_FAVORITE',
  payload,
})

export const loginRequest = payload => ({
  type: 'LOGIN_REQUEST',
  payload,
})

export const logoutRequuest = payload => ({
  type: 'LOGOUT_REQUEST',
  payload,
})

export const registerRequest = payload => ({
  type: 'REGISTER_REQUEST',
  payload,
})

export const getVideoSoruce = payload => ({
  type: 'GET_VIDEO_SOURCE',
  payload,
})
