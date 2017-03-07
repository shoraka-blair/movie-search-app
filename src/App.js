import React, { Component } from 'react';
import 'tachyons/css/tachyons.css'
import Search from './components/search'
import Posters from './components/posters'
import fetch from 'isomorphic-fetch'

const url = 'http://www.omdbapi.com/'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      error: ''
    }
    this.search = this.search.bind(this)
  }

  search ({searchText,searchType}) {
    fetch(`${url}?s=${searchText}&type=${searchType.toLowerCase()}`)
    .then(res=>res.json())
    .then(json=>this.setState({
      searchedFor: searchText,
      movies:json.Search,
    error: json.error
  }))
  .catch(err => this.setState({error: err.message}))

  }
  render() {
    return (
      <div className="pa4">
      <Search search={this.search} />
      {this.state.error ? <h2>{this.state.error}</h2>: null}
      {this.state.searchedFor ? <p>Searched for:{this.state.searchedFor}</p>: null}
      <Posters movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
