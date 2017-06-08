/**
 * Created by litong on 2017/6/8.
 */
import React from 'react'

import BuyAndStore from '../../../components/BuyAndStore'
class Buy extends React.Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isStore: false
        };
      }
    render() {
        return (
            <div>
                <BuyAndStore isStore={this.state.isStore} buyHandle={this.buyHandle.bind(this)} storeHandle={this.storeHandle.bind(this)}></BuyAndStore>
            </div>
        )
    }
    buyHandle() {

    }
    storeHandle() {

    }
}
export default Buy