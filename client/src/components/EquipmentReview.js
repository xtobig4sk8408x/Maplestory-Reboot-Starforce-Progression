import React, { useState } from "react";

function Comment({equipReview}) {

    return (
        <div>
            <p>Comment: {comment.comment}</p>
            <span>Rating: {comment.rating}</span>
        </div>
    )
}

export default Comment;