/**
 * Created by litong on 2017/6/6.
 */
import * as actinTypes from '../actions/actionTypes'

const initialState = {
    page: 0,
    likeList: []
}

export function userinfo(state = initialState,action) {
    switch(action.type) {
        case actinTypes.USER_CURRENTCITY:
            return {
                ...state,
                cityName: action.payload.cityName
            }
        case actinTypes.SAVE_HOMEAD:
            return {
                ...state,
                homeAd: action.payload.homeAd
            }
        case  actinTypes.SAVE_LIKELIST:
            return {
                ...state,
                page: state.page + 1,
                likeList: state.likeList.concat(action.payload.likeList)
            }
        default:
            return state
    }
}