/**
 * Created by litong on 2017/6/6.
 */
import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
//组件
import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'
import HomeAd from '../../components/HomeAd'
import LikeList from '../../components/LikeList'
import LoadMore from '../../components/LoadMore'

import { getHomeAd,getLikeList } from '../../actions/userinfo'
class Home extends React.Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            hasMore: true
        }
      }
      render() {
          return (
              <div>
                  <HomeHeader cityName={this.props.userInfo.cityName}></HomeHeader>
                  <Category></Category>
                  <div style={{ height: '15px',background: '#ededed'}}></div>
                  {
                      this.props.userInfo.homeAd
                          ? <HomeAd homead={this.props.userInfo.homeAd}></HomeAd>
                          : <div>加载中</div>
                  }
                  {
                      this.props.userInfo.likeList.length > 0
                          ? <LikeList likeList={this.props.userInfo.likeList}></LikeList>
                          : <div>加载中</div>
                  }
                  <LoadMore loadMore={this.loadMoreLikeList.bind(this)} isLoadingMore={this.props.userInfo.isLoading}/>
              </div>
          )
      }
    componentDidMount() {
        //在这里请求 广告信息
        this.props.getHomeAd()
        //在这里请求 猜你喜欢信息
        this.props.getLikeList(this.props.userInfo.cityName,this.props.userInfo.page)
    }
    loadMoreLikeList() {
        this.props.getLikeList(this.props.userInfo.cityName,this.props.userInfo.page)
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch,ownProps) {
    return {
        getHomeAd: () => {
            //发送请求广告的Action
            dispatch(getHomeAd())
        },
        getLikeList: () => {
            //发送请求 猜你喜欢的 Action
            dispatch(getLikeList())
        }
    }
}

Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

export default Home
