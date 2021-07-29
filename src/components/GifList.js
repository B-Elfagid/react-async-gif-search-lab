import React from 'react';

const GifList = props => {
    return (
      <ul>
        {console.log(props.gif)}
        {props.gifs.map(gif => (
          <li key={gif.id}>
            <img src={gif.images.original.url} alt="" />
          </li>
        ))}
      </ul>
    );
  };

export default GifList;