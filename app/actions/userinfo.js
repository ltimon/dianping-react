import * as actionTypes from './actionTypes'
import axois from 'axios'

export function initCity(cityName) {
    return {
        type: actionTypes.USER_CURRENTCITY,
        payload: {
            cityName: cityName
        }
    }
}

export function getHomeAd() {
//发送异步 action
    return dispatch => axois.get('/api/homead')
        .then((res) => {
            dispatch(saveHomeAd(res.data))
        })
        .catch((error) => {
            console.log(error)
        })
}

export function saveHomeAd(object) {
    return {
        type: actionTypes.SAVE_HOMEAD,
        payload: {
            homeAd: object
        }
    }
}