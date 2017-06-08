/**
 * Created by litong on 2017/6/9.
 */
import React from 'react'

import './style.less'

import Item from './item/Item'

class CommentList extends React.Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            list: [1,2,3]
        };
      }
    render() {
        const data = {
            username: '133****3355',
            comment: '非常好吃，棒棒的，下次再来',
            star: 5
        }
        return (
            <div>
                {
                    this.state.list.map((item,index) => {
                       return <Item key={ index } data={data}></Item>
                    })
                }
            </div>
            
        )
    }
}

export default CommentList