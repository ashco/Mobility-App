import Router from "next/router";
import NProgress from "nprogress";
import styled from "styled-components";

// Handle loading progress bar
Router.events.on("routeChangeStart", url => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", url => {
  NProgress.done();
});

Router.events.on("routeChangeError", url => {
  NProgress.done();
});

const Header = () => (
  <HeaderWrapper>
    <a href="/">Header</a>
  </HeaderWrapper>
);

const HeaderWrapper = styled.header``;

export default Header;
