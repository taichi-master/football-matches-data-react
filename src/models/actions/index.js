import * as types from '../action-types'
import * as api from '../api'

export function getFootballCompetitions( year ) {
    return async dispatch => {
        dispatch( {type: types.GET_FOOTBALL_COMPETITIONS_BY_YEAR, year } )
        try {
            const data = await api.getFootballCompetitions( year )

            dispatch( {type: types.GET_FOOTBALL_COMPETITIONS_SUCCESS, data } )

        } catch (err) {
            dispatch( {type: types.GET_FOOTBALL_COMPETITIONS_FAILURE } )
        }
    }
}