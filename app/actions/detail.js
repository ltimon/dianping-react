import * as ActionTypes from './actionTypes'
import axois from 'axios'

export function getDetailInfo(shopId) {
    return dispatch => axois.get('/api/detail/info/' + shopId)
        .then((res) => {
            dispatch(saveDetailInfo(res.data))
        })
        .catch(error => {
            console.log(error)
        })
}

export function saveDetailInfo(object) {
    return {
        type: ActionTypes.GET_DETAIL_INFO,
        payload: {
            info:object
        }
    }
}
