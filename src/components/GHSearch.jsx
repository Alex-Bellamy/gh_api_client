import React from "react";
import { Button, Input } from "semantic-ui-react";

const GHSearch = () => {
  return (
    <>
      <Input type="text" name="search" placeholder="Input GH username" />
      <Button id="submit" name="search">
        Search
      </Button>
    </>
  );
};

export default GHSearch;
