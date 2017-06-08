/**
 * Created by litong on 2017/6/8.
 */
import React from 'react'

import './CurrentCity.less'

class CurrentCity extends React.Component {
    render() {
        return (
            <div className="current-city">
               当前选择城市:<h2>&nbsp;{ this.props.currentCityName } </h2>
            </div>
        )
    }
}

export default CurrentCity