/**
 * Created by litong on 2017/6/9.
 */
import React from 'react'

import OrderItem from './Item'

import './style.less'

class OrderList extends React.Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            orderList : [1,2,3,4,5]
        };
      }
    render() {
        return (
            <div>
                {
                    this.state.orderList.map((item,index) => {
                        return (
                                <OrderItem key={ index } data={ item }></OrderItem>
                            )
                    })
                }
            </div>
        )
    }
}

export default OrderList
