/**
 * Created by litong on 2017/6/7.
 */
import React from 'react'
import { Link } from 'react-router-dom'

import './style.less'
import SearchInput from '../../components/SearchInput'

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
                <Link to="/city">
                    <div className="header-left">
                        { this.props.cityName }
                        <i className="icon-angle-down"></i>
                    </div>
                </Link>
                <div className="header-center">
                    <i className="icon-search"></i>
                    <SearchInput value='' searchHandle={this.search.bind(this)}/>
                </div>
                <Link to="/user">
                    <div className="header-right"><i className="icon-user"></i></div>
                </Link>
            </div>
        )
    }

    search(keyword) {
        //此处应该跳转到 search页面中
        
        this.props.search(keyword)
    }
}

export default HomeHeader