import React from 'react';

    const GifSearch = props => {
        return (
          <form onSubmit={props.fetchGifs}>
            <label>
              Enter a search term:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      };


export default GifSearch;