import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import fetch from 'isomorphic-unfetch';

const apolloClient = null;

if (!process.browser) {
  global.fetch = fetch;
}
