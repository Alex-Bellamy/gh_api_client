import React, { Component } from "react";
import { Button, Input } from "semantic-ui-react";
import axios from "axios";

class GHSearch extends Component {
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