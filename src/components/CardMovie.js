import React from 'react';

function CardMovie({movie}) {
    return ( 
        <div className='movie'>
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                {/* neu khong co anh N/A not api */}
                <img src={movie.Poster !== 'N/A'? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
     );
}

export default CardMovie;