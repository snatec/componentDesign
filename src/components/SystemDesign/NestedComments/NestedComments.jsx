import React, { useState } from 'react';
import CommentBox from './CommentBox';
import ReplyBox from './ReplyBox';

const NestedComments = () => {
    return(
        <div>
            <CommentBox/>
        </div>
    )
}

export default NestedComments;