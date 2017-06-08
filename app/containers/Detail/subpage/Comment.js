/**
 * Created by litong on 2017/6/8.
 */
import React from 'react'

import CommentList from '../../../components/CommentList'

import './comment.less'

class Comment extends React.Component {
    render() {
        return (
            <div className="detail-comment-subpage">
                <h2>用户点评</h2>
                <CommentList></CommentList>
            </div>
        )
    }
}

export default Comment