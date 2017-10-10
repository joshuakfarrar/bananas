import r2 from 'r2'

const API = 'http://localhost:3030'

export function authenticate (email, password) {
  let params = {
    strategy: 'local',
    email: email,
    password: password
  }
  return r2.post(`${API}/authentication`, { json: params }).json
}

export function fetchFoodsToAvoid (date) {
  let params = {
    date: date
  }
  return r2.post(`${API}/foodsToAvoid`, { json: params }).json
}
