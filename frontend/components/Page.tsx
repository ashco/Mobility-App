import React, { Component } from "react";
import Meta from "./Meta";
import Header from "./Header";
import Nav from "./Nav";

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        {this.props.children}
        <Nav />
      </div>
    );
  }
}

export default Page;
