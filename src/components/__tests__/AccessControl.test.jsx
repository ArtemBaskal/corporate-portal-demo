import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import AccessControl from "../AccessControl";
import Root from "../../Root";

configure({ adapter: new Adapter() });

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <AccessControl />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("has one select and 4 options", () => {
  expect(wrapped.find("select").length).toEqual(1);
  expect(wrapped.find("option").length).toEqual(4);
});
