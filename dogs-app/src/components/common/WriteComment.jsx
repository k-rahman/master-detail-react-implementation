import React from 'react';

const WriteComment = ({ comment, subjectName, onCommentTextChange, onSendComment }) => {

   const handleSubmit = e => {
      e.preventDefault();

      onSendComment();
   };

   return (
      <div>
         <p className='mb-2'>Leave a message for {subjectName}</p>
         <form onSubmit={handleSubmit} className='form-inline'>
            <label htmlFor='commentInput' />
            <input
               autoFocus
               className="form-control"
               type='text'
               value={comment}
               onChange={onCommentTextChange}
            />
            <button
               className="btn btn-primary ml-2"
               type='submit'
            >Send</button>
         </form>
      </div>
   );
}

export default WriteComment;