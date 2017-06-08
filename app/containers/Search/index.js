/**
 * Created by litong on 2017/6/8.
 */
import React from 'react'
import './style.less'

class Search extends React.Component {
    render() {
        const match = this.props.match
        return (
            <div>
                <div>search page { this.props.match.params.keyword }</div>
            </div>
        )
    }
}

export default Search