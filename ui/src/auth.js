import { authenticate } from './api'

const ACCESS_TOKEN = 'ACCESS_TOKEN'

export function login (credentials) {
  const { email, password } = credentials
  return authenticate(email, password)
}

export function logout () {
  deleteAccessToken()
}

export function setAccessToken (token) {
  localStorage.setItem(ACCESS_TOKEN, token)
}

export function deleteAccessToken () {
  localStorage.removeItem(ACCESS_TOKEN)
}

export function getAccessToken (token) {
  return localStorage.getItem(ACCESS_TOKEN)
}

export function isLoggedIn () {
  const accessToken = getAccessToken()
  return !!accessToken
}

export function pushToBirthdayEntryIfLoggedIn (to, from, next) {
  if (isLoggedIn()) {
    next({
      path: '/birthday'
    })
  } else {
    next()
  }
}

export function requireAuth (to, from, next) {
  if (!isLoggedIn()) {
    next({
      path: '/'
    })
  } else {
    next()
  }
}
