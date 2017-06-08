/**
 * Created by litong on 2017/6/6.
 */
import { combineReducers } from 'redux'

import { userinfo } from './userinfo'
import { detailinfo } from './detailinfo'
export  default combineReducers({
    userinfo,
    detailinfo
})