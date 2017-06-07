/**
 * Created by litong on 2017/6/7.
 */
import React from 'react'

import './style.less'

class LoadMore extends React.Component{
    render() {
        return (
            <div className="load-more" ref="wrapper">
                {
                    this.props.isLoadingMore
                    ? <span>加载中...</span>
                    : <span onClick={ this.loadMore.bind(this) }>加载更多</span>
                }
            </div>
        )
    }
    loadMore() {
        this.props.loadMore()
    }
    componentDidMount() {
        // 使用滚动时自动加载更多
        // const loadMoreFn = this.props.loadMoreFn
        // const wrapper = this.refs.wrapper
        // let timeoutId
        // function callback() {
        //     const top = wrapper.getBoundingClientRect().top
        //     const windowHeight = window.screen.height
        //     if (top && top < windowHeight) {
        //         // 证明 wrapper 已经被滚动到暴露在页面可视范围之内了
        //         loadMoreFn()
        //     }
        // }
        // window.addEventListener('scroll', function () {
        //     if (this.props.isLoadingMore) {
        //         return
        //     }
        //     if (timeoutId) {
        //         clearTimeout(timeoutId)
        //     }
        //     timeoutId = setTimeout(callback, 50)
        // }.bind(this), false);
    }
}

export default LoadMore