import React from 'react'
import {map} from 'ramda'


class Posters extends React.Component {
  render() {
    const poster = (movie) => (
      <img key={movie.imdbID} src={movie.Poster}  alt={movie.Name}/>
    )

      return (

          <div >
          {map(poster, this.props.movies)}
          </div>
      )
  }
}
export default Posters
