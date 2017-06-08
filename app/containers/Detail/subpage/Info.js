/**
 * Created by litong on 2017/6/8.
 */
import React from 'react'

import DetailInfo from '../../../components/DetailInfo'
class Info extends React.Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            info: false
        };
      }
    render() {
        return (
            <div>
                {
                    this.state.info
                        ? <DetailInfo data={this.state.info}/>
                        : ''
                }
            </div>
        )
    }
}
export default Info