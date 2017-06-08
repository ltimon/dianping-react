/**
 * Created by litong on 2017/6/8.
 */
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './style.less'

class Header extends React.Component {
    render() {
        return (
            <div id="common-header">
                <span className="back-icon" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        )
    }

    clickHandle() {
        // this.props.goBack()
        window.history.back()
    }
}

export default Header