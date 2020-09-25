import React from 'react';

const Comment = ({ comment }) => {
   return (
   <>
      <p className="h6 mb-0"><small>{comment.date}</small></p>
      <p className="h5 mt-1">'{comment.content}'</p>
      <br/>
   </>
   );
};

export default Comment;