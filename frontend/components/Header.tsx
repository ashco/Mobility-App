import Router from "next/router";
import NProgress from "nprogress";

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
  <div>
    <a href="/">Header</a>
  </div>
);

export default Header;
