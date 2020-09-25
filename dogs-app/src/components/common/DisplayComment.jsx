import React from 'react';
import Comment from './Comment';

const DisplayComment = ({ comments }) => {
   return (
      <div>
         <h5 className="font-weight-bold mt-5">Comments</h5>
         {!comments.length &&
            <p>Be the first to write a comment!</p>}
         {comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
         ))}
      </div>
   );
};

export default DisplayComment;