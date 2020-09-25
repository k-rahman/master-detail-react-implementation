import React from 'react';

const LikeCounter = (props) => {
   const {
      likes = 0,
      dislikes = 0,
      onLikeClick = f => f,
      onDislikeClick = f => f
   } = props;

   return (
      <>
         <i
            className="fa fa-thumbs-up"
            onClick={onLikeClick}
            id='like'>{likes}</i>
         <i
            className="fa fa-thumbs-down pl-2"
            onClick={onDislikeClick}
            id='dislike'>{dislikes}</i>
      </>
   );
};

export default LikeCounter;