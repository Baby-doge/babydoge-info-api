import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import fetch from "cross-fetch";

export const client = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: "https://graph-bsc-mainnet.babydoge.com/subgraphs/name/babydoge/exchange",
  }),
  cache: new InMemoryCache(),
});
