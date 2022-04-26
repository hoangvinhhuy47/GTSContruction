import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "assets/scss/globals.scss";
import "common/functions/reveal-on-scroll/scss/ros.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { store } from "redux/store";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
const httpLink = new HttpLink({
  uri: "http://34.121.43.60:8888/v1/graphql",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink]),
});
ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
