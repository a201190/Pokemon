import {FETCH_USERS} from '../action/types'
export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload || false;
    default:
      return state;
  }
}
