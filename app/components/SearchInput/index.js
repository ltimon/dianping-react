/**
 * Created by litong on 2017/6/8.
 */
import React from 'react'

import './style.less'

class SearchInput extends React.Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            value: ''
        };
      }

    render() {
        return (
            <input
                className="search-input"
                type="text"
                placeholder="请输入搜索内容"
                onChange={this.ChangeHandle.bind(this)}
                onKeyUp={this.KeyUpHandle.bind(this)}
                value={this.state.value}
            />
        )
    }
    //搜索内容变化的时候 同时更新state中的内容
    ChangeHandle(e) {
        this.setState({
            value: e.target.value
        })
    }
    
    KeyUpHandle(e) {
        if (e.keyCode !== 13){
            return
        }
        //触发父组件的 searchHandle事件
        this.props.searchHandle(this.state.value)
    }

    componentDidMount() {
        this.setState({
            value: this.props.value || ''
        })
    }
}

export default SearchInput
    