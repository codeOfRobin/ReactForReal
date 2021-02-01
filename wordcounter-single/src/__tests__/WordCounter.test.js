import React from "react";
import { shallow } from "enzyme";
import WordCounter from "../WordCounter";
import countWords from "../countWords";
import Counter from "../Counter";
import Editor from "../Editor";
import ProgressBar from "../ProgressBar";
import { describe, expect, it } from "@jest/globals";

describe("when I type some words", () => {
  const target = 10;
  const inputString = 'One two three four';
  const wordCounter = shallow(<WordCounter targetWordCount = {target} /> )
});
