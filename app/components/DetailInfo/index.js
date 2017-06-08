/**
 * Created by litong on 2017/6/8.
 */
import React from 'react'

import Star from '../../components/Start'

import './style.less'

class DetailInfo extends React.Component {
    render() {
        const data = this.props.data
        return (
            <div id="detail-info-container">
                <div className="info-container clear-fix">
                    <div className="info-img-container float-left">
                        <img src={data.img}/>
                    </div>
                    <div className="info-content">
                        <h1>{data.title}</h1>
                        <div className="star-container">
                            {/* 引用 Star 组件 */}
                            <Star star={data.star}/>
                            <span className="price">￥{data.price}</span>
                        </div>
                        <p className="sub-title">{data.subTitle}</p>
                    </div>
                </div>
                {/* 设置 innerHTML */}
                <p dangerouslySetInnerHTML={{__html: data.desc}} className="info-desc"></p>
            </div>
        )
    }
}
export default DetailInfo