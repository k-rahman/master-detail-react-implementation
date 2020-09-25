import React from 'react';
import { Link } from 'react-router-dom';
import HorizontalCard from './common/HorizontalCard';

const DogsHome = ({ dogs = [] }) => {

  return (
    dogs.map(dog => (
      <Link key={dog.id} to={`/dog-info/${dog.id}`} className='text-decoration-none text-reset'>
        <HorizontalCard
          key={dog.id}
          image={dog.img}
          title={dog.name}
          subTitle={dog.species}
          text={dog.interset}
        />
      </Link>
    ))
  );
}

export default DogsHome;