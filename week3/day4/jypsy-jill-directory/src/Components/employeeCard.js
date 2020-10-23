import React, { Component } from 'react';

function employeeCard({user}) {

  let moviesList = user.favoriteMovies.map(movie => <li>{movie}</li>)

  return (
    <div className='card-container'>
      <div className='current-card-number'>{user.id}/25 </div>
      <div className='person-info-container'>
        <h1>{user.name.first} {user.name.last}</h1>
        <div className='person-info'>
          <p className = 'person-info-details'><span className='bold'> From: </span>{user.city} {user.country}</p> 
          <p className = 'person-info-details'><span className='bold'>Job Title: </span>{user.title}</p>
          <p className = 'person-info-details'><span className='bold'>Employer: </span>{user.employer}</p>       
        </div>
        <div className='person-fav-movies'>
          <span className='bold'>Favorite Movies:</span>
          <ol className='fav-movie-list'>
            {moviesList}
          </ol>
        </div>
      </div>
    </div>
  );
}

  export default employeeCard;
