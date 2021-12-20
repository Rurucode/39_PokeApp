import React from "react";
import { shallow } from "enzyme";
import Busqueda from "./Busqueda";

describe("Busqueda", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Busqueda />);
    expect(wrapper).toMatchSnapshot();
  });
});
