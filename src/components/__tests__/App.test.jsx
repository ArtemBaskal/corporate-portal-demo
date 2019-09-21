import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import App from "../App";
import { Link, Switch, HashRouter, Route } from "react-router-dom";
import AccessControl from "../AccessControl";
import MainPage from "../MainPage";
import Catalog from "../Catalog";

let wrapped;

configure({ adapter: new Adapter() });

beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows one hash-router element", () => {
  expect(wrapped.find(HashRouter)).toHaveLength(1);
});

it("shows two links", () => {
  expect(wrapped.find(Link).length).toEqual(2);
});

it("shows one access-control element", () => {
  expect(wrapped.find(AccessControl).length).toEqual(1);
});

it("shows one switch element", () => {
  expect(wrapped.find(Switch).length).toEqual(1);
});

it("has main page and catalog as routes", () => {
  expect(
    wrapped
      .find(Route)
      .at(0)
      .prop("component")
  ).toEqual(MainPage);

  expect(
    wrapped
      .find(Route)
      .at(1)
      .prop("component")
  ).toEqual(Catalog);
});
