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
//更新 用户选择的城市,这里 直接处理过程按照 initCity了 所以就不做改变了
export function updateCity(cityName) {
    return {
        type: actionTypes.USER_CURRENTCITY,
        payload: {
            cityName: cityName
        }
    }
}
//获取 超值特惠 信息
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
//获取到超值特惠
export function saveHomeAd(object) {
    return {
        type: actionTypes.SAVE_HOMEAD,
        payload: {
            homeAd: object
        }
    }
}
//获取 猜你喜欢 信息
export  function getLikeList(city,page) {
    return dispatch => {
        dispatch(setLikeListLoading(true))//此处先设置 是否正在加载信息的状态
        axois.get('/api/homelist/' + city + '/' + page)
            .then((res) => {
                dispatch(saveLikeList(res.data))
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export function saveLikeList(object) {
    return {
        type: actionTypes.SAVE_LIKELIST,
        payload: {
            likeList: object.data,
            isLoading: false
        }
    }
}

export function setLikeListLoading(flag) {
    return {
        type: actionTypes.SET_ISLOADINGLIKELIST_FLAG,
        payload: {
            isLoading: flag
        }
    }
}