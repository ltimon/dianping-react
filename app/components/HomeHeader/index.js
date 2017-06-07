/**
 * Created by litong on 2017/6/7.
 */
import React from 'react'
import './style.less'

class HomeHeader extends React.Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }
    render() {
        return (
            <div className="home-header">
                <div className="header-left">
                    { this.props.cityName }
                    <i className="icon-angle-down"></i>
                </div>
                <div className="header-center">
                    <i className="icon-search"></i>
                    <input type="text" placeholder="请输入关键字"/>
                </div>
                <div className="header-right"><i className="icon-user"></i></div>
            </div>
        )
    }
}

export default HomeHeader