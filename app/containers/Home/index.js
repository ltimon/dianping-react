/**
 * Created by litong on 2017/6/6.
 */
import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'

import { getHomeAd } from '../../actions/userinfo'
class Home extends React.Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }
      render() {
          return (
              <div>
                  <HomeHeader cityName={this.props.userInfo.cityName}></HomeHeader>
                  <Category></Category>
                  <div style={{ height: '15px',background: '#eee'}}></div>
              </div>
          )
      }

    componentDidMount() {
        this.props.getHomeAd()
        // axios.get('/api/homead')
        //     .then(function (res) {
        //         console.log(res)
        //     })
        //     .catch(function (error) {
        //         console.log(error)
        //     })
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
            // axios.get('/api/homead').then(function (res) {
            //     dispatch(getHomeAd(res.data))
            // })
            dispatch(getHomeAd())
        }
    }
}

Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

export default Home
