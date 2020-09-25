import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LikeCounter from './common/LikesCounter';
import DisplayComment from './common/DisplayComment';
import WriteComment from './common/WriteComment';
import { Link } from 'react-router-dom';

const DogInfo = ({ match, history }) => {

   const [dog, setDog] = useState();
   const [comment, setComment] = useState('');

   useEffect(() => {
      axios.get(`http://localhost:3002/api/dogs/${match.params.id}`)
         .then(res => {
            setDog(res.data);
         })
         .catch(() => history.replace('/not-found'));
   }, [match.params.id]);

   const handleTextChange = e => {
      setComment(e.currentTarget.value);
   };

   const handleSendComment = () => {
      const dogToUpdate = { ...dog };
      const newComment = {
         id: dog.comments.length,
         content: comment,
         date: new Date().toLocaleString('fi-fi')
      };

      dogToUpdate.comments = [...dog.comments, newComment];

      axios.put(`http://localhost:3002/api/dogs/${dog.id}`, dogToUpdate)
         .then(res => {
            setDog(dogToUpdate);
            setComment('');
         });
   };

   const handleLikeClick = ({ currentTarget: input }) => {
      const dogToUpdate = { ...dog };

      console.log(input);
      if (input.id === 'like')
         ++dogToUpdate.likes;
      else
         ++dogToUpdate.dislikes;

      axios
         .put(`http://localhost:3002/api/dogs/${dog.id}`, dogToUpdate)
         .then(res => {
            setDog(dogToUpdate);
         })
         .catch(error => { console.log(error) });
   };

   return (
      (!dog) ? null :
         <>
            <Link to='/dogs-home'>
               <i className="fas fa-arrow-left ml-4 mt-3 fixed-top" style={{ fontFamily: 'FontAwesome' }}>
                  <span className='text-decoration-none text-dark'>Back</span>
               </i>
            </Link>
            <div className="row no-gutters">
               <div className="col-12">
                  <h5 className="mb-0">{dog.name}</h5>
                  <p className="mt-0">
                     <small className="text-muted" >{dog.species}
                     </small>
                  </p>
               </div>
               <div>
                  <div
                     className="col p-0 d-flex flex-column align-items-end">
                     <div>
                        <img
                           src={`http://localhost:3002/${dog.img}`}
                           style={{ width: 210, height: 170 }} alt="" />
                     </div>
                     <div className="p-1">
                        <LikeCounter
                           onLikeClick={handleLikeClick}
                           onDislikeClick={handleLikeClick}
                           likes={dog.likes}
                           dislikes={dog.dislikes} />
                     </div>
                  </div>
               </div>
               <div className="col" >
                  <p className="ml-3">Enjoys {dog.interset}</p>
               </div>
            </div>
            <DisplayComment
               comments={dog.comments} />
            <WriteComment
               comment={comment}
               subjectName={dog.name}
               onCommentTextChange={handleTextChange}
               onSendComment={handleSendComment} />
         </>
   );
};

export default DogInfo;