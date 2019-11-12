import App from "next/app";
// import { ApolloProvider } from "react-apollo";
import { ApolloProvider } from "@apollo/react-hooks";
import withApollo from "../lib/withApollo";
// import withData from "../lib/withData";
import Page from "../components/Page";

import { ApolloClient } from "apollo-boost";

// type MyProps = { apollo: object };

interface Props {
  apollo: ApolloClient<{}>;
}

class MyApp extends App<Props> {
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
          <Component {...pageProps} />
        </Page>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);
