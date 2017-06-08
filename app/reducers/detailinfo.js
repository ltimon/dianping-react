/**
 * Created by litong on 2017/6/8.
 */
import * as actinTypes from '../actions/actionTypes'

export function detailinfo(state = {},action) {
    switch (action.type){
        case actinTypes.GET_DETAIL_INFO:
            console.log(action.payload)
            return {
                ...state,
                info: action.payload.info
            }
        default:
            return state
    }
}