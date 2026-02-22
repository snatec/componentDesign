import React, { useState } from 'react';
import ReplyBox from './ReplyBox';
import './NestedComments.css';

const CommentBox = () => {
    return(
        <div class='container'>
          <div class='commentContainer'>
                <div class='commentText'>how are you</div>
                <div class='buttonClass'>
                    <button class='reply'>reply</button>
                    <button class='cancel'>cancel</button>
                </div>
           </div>
           <ReplyBox/>
        </div>
    )
}

export default CommentBox;