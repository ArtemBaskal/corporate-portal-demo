import React from "react";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import reducers from "./reducers";

interface Root {
  children: JSX.Element;
  initialState?: {};
  enhancer: any;
}

export default ({
  children,
  initialState = {},
  enhancer
}: Root): JSX.Element => {
  const store = createStore(reducers, initialState, enhancer);
  return <Provider store={store}>{children}</Provider>;
};
