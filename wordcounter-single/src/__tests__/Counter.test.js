import { render } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import Counter from "../Counter";
import { describe, expect, it } from "@jest/globals";

describe("A counter", () => {
  it("Displays the count and label", () => {
    const counter = renderer.create(<Counter legend="Count" count={34} />);
    expect(counter.toJSON()).toMatchSnapshot();
  });
});
