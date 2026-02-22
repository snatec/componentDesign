import React, { useState } from 'react';
import './NestedComments';

const ReplyBox = () => {
    return(
        <div class='replyContainer'>
           <textarea class='commentArea'/>
           <button class='postButton'>post reply</button>
        </div>
    )
}

export default ReplyBox;