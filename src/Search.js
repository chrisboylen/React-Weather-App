import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  updateLocation = (e) => {
    this.setState({ input: e.target.value })
  }

  render() {
    return (
      <form class="submit-field" onSubmit={ (e) => e.preventDefault() }>
        <input
          class="input"
          type="text"
          placeholder = "Type city, state here!" 
          onChange={ (e) => this.updateLocation(e) }
          />
        <button class="button" onClick={ (e) => this.props.getUserLocation(this.state.input) }>
          Submit
        </button>
      </form>
    );
  }
}

export default Search;