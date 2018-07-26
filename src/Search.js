import React, { Component } from 'react';
import locationData from './locationData';
const { PrefixTrie } = require('complete-me-2');
const trie = new PrefixTrie();
trie.populate(locationData);

class Search extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      suggestedWords: []
    }
  }

  updateLocation = (e) => {
    this.setState({ 
      input: e.target.value,
      suggestedWords: trie.suggest(this.state.input) 
    })
  }

  render() {
    return (
      <form onSubmit={ (e) => e.preventDefault() }>
        <input
          type="text"
          autoFocus="autofocus"
          placeholder="Type city, state here!" 
          onChange={ (e) => this.updateLocation(e) }
          list="cities"
          />
        <datalist id="cities">
        </datalist>
        <button onClick={ (e) => this.props.getUserLocation(this.state.input) }>
          Submit
        </button>
      </form>
    );
  }
}

export default Search;