/**
 * Created by litong on 2017/6/7.
 */
import React from 'react'

import './style.less'
class HomeAd extends React.Component{
    render() {
        const homeAd = this.props.homead
        return (
            <div id="home-ad">
                <h2>超级特惠</h2>
                <div className="ad-container clear-fix">
                    { homeAd.map((item,index) => {
                        return (
                            <div key={ index } className="ad-item float-left">
                                <img src={ item.img } alt={ item.title }/>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default HomeAd