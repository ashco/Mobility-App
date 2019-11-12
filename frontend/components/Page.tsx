import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/GlobalStyle";
import Meta from "./Meta";
import Header from "./Header";
// // import SelectRow from "./SelectRow";
import Nav from "./Nav";

const theme = {
  red: "#FF0000",
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
  height: 100vh;
  display: grid;
  grid-template-rows: 80px auto 80px;
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
  height: auto;
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
          {/* <SelectRow /> */}
          <Nav />
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
