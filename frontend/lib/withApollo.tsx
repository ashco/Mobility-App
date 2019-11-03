// import withApollo from 'next-with-apollo';
// import ApolloClient from 'apollo-boost';
// import { endpoint, prodEndpoint } from '../config';
// // import { LOCAL_STATE_QUERY } from '../components/Cart';

// function createClient({ headers }) {
//   return new ApolloClient({
//     uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
//     request: (operation) => {
//       operation.setContext({
//         fetchOptions: {
//           credentials: 'include',
//         },
//         headers,
//       });
//     },
//   });
// }
// export default withApollo(createClient);

import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { GRAPHQL_URL } from "../config";

export default withApollo(
  ({ ctx, headers, initialState }) =>
    new ApolloClient({
      uri: GRAPHQL_URL,
      cache: new InMemoryCache().restore(initialState || {})
    })
);
