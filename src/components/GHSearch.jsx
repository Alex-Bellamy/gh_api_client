import React, { Component } from "react";
import { Button, Input } from "semantic-ui-react";
import axios from "axios";

class GHSearch extends Component {
  state = {
    searchTerm: [],
    items: [],
  };

  onChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const url = `https://api.github.com/search/users?q=${this.state.searchTerm}`;
    const response = await axios.get(url);
    this.setState({
      items: response.data.items,
    });
  };

  render() {
    const showUsernames = this.state.items.map((user) => {
      return (
        <div>
          <p>{user.login}</p>
        </div>
      );
    });

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="search"
            placeholder="Input GH username"
            value={this.state.searchTerm}
            onChange={this.onChange}
          />
          <Button id="submit" name="search">
            Search
          </Button>
        </form>
        <p id="users">{showUsernames}</p>
      </div>
    );
  }
}

export default GHSearch;