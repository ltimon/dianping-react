/**
 * Created by litong on 2017/6/7.
 */
import React from 'react'
import { connect } from 'react-redux'

import { updateCity } from '../../actions/userinfo'
import localStore from '../../utils/localStore'
import { USER_CURRENT_CITY } from '../../config/keysDefine'

import CityList from '../../components/CityList'
import Header from '../../components/Header'

class City extends React.Component {
    render() {
        return (
            <div>
                <Header title="选择城市" goBack={this.goBack.bind(this)}></Header>
                <CityList chooseCity={this.chooseCity.bind(this)}></CityList>
            </div>
        )
    }

    chooseCity(cityName) {
        //先存储用户选择的 城市
        localStore.setItem(USER_CURRENT_CITY,cityName)
        // 发送一个 action
        this.props.initCity(cityName)
        this.props.history.goBack()
    }
    goBack() {
        this.props.history.goBack()
    }
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch,ownProps) {
    return {
        initCity: (cityName) => {
            dispatch(updateCity(cityName))
        }
    }
}

City = connect(
    mapStateToProps,
    mapDispatchToProps
)(City)

export default City