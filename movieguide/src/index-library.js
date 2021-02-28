import React from "react";
import ReactDOM from "react-dom";
import WordCounter from "./WordCounter";
export function init(element, target = 10) {
  ReactDOM.render(<WordCounter targetWordCount={target} />, element);
}
export function destroy(element) {
  ReactDOM.unmountComponentAtNode(element);
}
