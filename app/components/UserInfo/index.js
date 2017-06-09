/**
 * Created by litong on 2017/6/9.
 */
import React from 'react'



import './style.less'

class UserInfo extends React.Component {
    render() {
        return (
            <div className="userinfo-container">
                <p>
                    <i className="icon-user"></i>
                    &nbsp;
                    <span>{ this.props.userInfo.userName }</span>
                </p>
                <p>
                    <i className="icon-map-marker"></i>
                    &nbsp;
                    <span>{ this.props.userInfo.cityName }</span>
                </p>
            </div>
        )
    }
}



export default UserInfo