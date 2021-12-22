import React from "react";
import { shallow } from "enzyme";
import Newformpokemon from "./newformpokemon";

describe("Newformpokemon", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Newformpokemon />);
    expect(wrapper).toMatchSnapshot();
  });
});
