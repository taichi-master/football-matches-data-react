import * as types from '../action-types'

const initState = {
  isFetching: false,
  didInvalidate: false,
  year: null,
  data: {}
}

export default ( state = initState, action ) => {
  switch ( action.type ) {
  case types.GET_FOOTBALL_COMPETITIONS_BY_YEAR:
    return { ...state, isFetching: true, didInvalidate: false, year: action.year }

  case types.GET_FOOTBALL_COMPETITIONS_SUCCESS:
    return { ...state, isFetching: false, didInvalidate: false, data: action.data }

  case types.GET_FOOTBALL_COMPETITIONS_FAILURE:
    return { ...state, isFetching: false, didInvalidate: true, data: {} }

  default:
    return state
  }
}