import React, { Component } from "react";
import { Button, Input } from "semantic-ui-react";
import axios from "axios";

class GHSearch extends Component {

  onChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const url = `https://api.github.com/search/users?q=${this.state.searchTerm}`;
    const response = await axios.get(url);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="search"
            placeholder="Input GH username"
            value={this.State.searchTerm}
            onChange={this.onChange}
          />
          <Button id="submit" name="search">
            Search
          </Button>
        </form>
      </div>
    );
  }
}

export default GHSearch;