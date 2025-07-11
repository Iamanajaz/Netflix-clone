import React from 'react'
const Posters = ({ posters }) => {
  return (
    <div>
      <div className="posters">
        {posters.map((movie) => (
          <img key={movie.id} src={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default Posters