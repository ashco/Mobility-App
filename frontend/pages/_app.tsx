import { ApolloProvider } from "react-apollo";
import withApollo from "../lib/withApollo";
// import withData from "../lib/withData";

import App from "next/app";
import Page from "../components/Page";

// type MyProps = { apollo: object };

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    interface LooseObject {
      // [key: string]: any;
      query?: object;
    }

    let pageProps: LooseObject = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <Page>
          <Component />
        </Page>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);
