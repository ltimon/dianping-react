/**
 * Created by litong on 2017/6/7.
 */
import React from 'react'

import LikeItem from './subs/LikeItem'
import './style.less'
class LikeList extends React.Component{
    render() {
        var likeList = this.props.likeList.data
        return (
            <div>
                <h2 className="home-list-title">
                    猜你喜欢
                </h2>
                <div className="list-container">
                    { likeList.map((item,index) => {
                        return <LikeItem key={ index } data={ item }></LikeItem>
                    })}
                </div>
            </div>
        )
    }
}

export default LikeList



