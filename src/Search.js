import React, { Component } from 'react';
import locationData from './locationData';
const { Trie } = require('complete-me-2');
const trie = new Trie();
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
      suggestedWords: trie.suggest(this.state.input) || []
    })
  }

  displaySuggestedWords() {
    return this.state.suggestedWords.map((word, i) => {
      if (this.state.input.length > 2) {
        return <option key={i}>{ word }</option>
      }
    }).splice(0, 10)
  }

  render() {
    return (
      <form className="submit-field" onSubmit={ (e) => e.preventDefault() }>
        <input
          className="input"
          type="text"
          autoFocus="autofocus"
          placeholder="Type city, state here!" 
          onChange={ (e) => this.updateLocation(e) }
          list="cities"
          />

        <datalist id="cities">
          { this.displaySuggestedWords() }
        </datalist>
        <button className="button" onClick={ (e) => this.props.getUserLocation(this.state.input) }>
          SEARCH
        </button>
      </form>
    );
  }
}

export default Search;