/**
 * Created by litong on 2017/6/9.
 */
import React from 'react'
import { connect } from 'react-redux'

import Header from '../../components/Header'
import UserInfo from '../../components/UserInfo'

import './style.less'
class User extends React.Component {
    render() {
        return (
            <div>
                <Header title="用户主页"></Header>
                <UserInfo userInfo={ this.props.userInfo ? this.props.userInfo : '' }></UserInfo>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.userinfo
    }

}

function mapDispatchToProps(dispatch,ownProps) {
    return {

    }
}

User = connect(
    mapStateToProps,
    mapDispatchToProps
)(User)

export default User