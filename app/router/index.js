/**
 * Created by litong on 2017/6/6.
 */
import React from 'react'
import  {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { connect } from 'react-redux'
import { initCity } from '../actions/userinfo'

import localStore from '../utils/localStore'
import * as KeysDefine from '../config/keysDefine'

import Home from '../containers/Home'
import City from '../containers/City'

import '../../static/css/common.less'
import '../../static/css/font.css'


const history = createHistory()

class App extends React.Component{
    render() {
        let routes = (
                <Switch>
                    <Route exact path="/" component={ Home }></Route>
                    <Route path="/city" component={ City }></Route>
                </Switch>
        )
        return (
            <Router history={ history }>
                {routes}
            </Router>
        )
    }

    componentDidMount() {
        let cityName = localStore.getItem(KeysDefine.USER_CURRENT_CITY)
        if (cityName == null) {
            cityName = '北京'
        }
        this.props.initCity(cityName)
    }
}
function mapStateToProps() {
    return {

    }
}

function mapDispatchToProps(dispatch,ownprops) {
    return {
        initCity: (cityName) => {
            dispatch(initCity(cityName))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)