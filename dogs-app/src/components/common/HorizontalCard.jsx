import React from 'react';

const HorizontalCard = props => {

   const { image, title, subTitle, text } = props;

   return (
      <div
         className="card mb-3"
         style={{ maxWidth: 540, cursor: "pointer" }}>
         <div className="row no-gutters">
            <div className="col-md-4">
               <img src={`http://localhost:3002/${image}`}
                  className="card-img" alt="" />
            </div>
            <div className="col-md-8" >
               <div className="card-body">
                  <h5 className="card-title mb-0">{title}</h5>
                  <p className="card-text mt-0">
                     <small className="text-muted" >{subTitle}</small></p>
                  <p className="card-text">Enjoys {text}</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HorizontalCard;