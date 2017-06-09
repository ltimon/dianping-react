import * as ActionTypes from './actionTypes'
import axois from 'axios'

//请求 详情内容的action
export function getDetailInfo(shopId) {
    return dispatch => axois.get('/api/detail/info/' + shopId)
        .then((res) => {
            dispatch(saveDetailInfo(res.data))
        })
        .catch(error => {
            console.log(error)
        })
}
//异步获取之后的回调
export function saveDetailInfo(object) {
    return {
        type: ActionTypes.GET_DETAIL_INFO,
        payload: {
            info:object
        }
    }
}
//请求评论内容
export  function getComments(shopId) {
    return dispatch => {
        axois.get('/api/detail/comment/' + shopId)
            .then((res) => dispatch(saveComments(res.data)))
            .catch(err => {
                console.log(err)
            })
    }
}
//异步获取到action后发出的action
export function saveComments(object) {
    console.log('1111')
    console.log(object)
    return {
        type: ActionTypes.GET_COMMENT_LIST,
        payload: {
            comments: object
        }
    }
}