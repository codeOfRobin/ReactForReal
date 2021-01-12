function Adder({ n1, n2 }) {
  const sum = n1 + n2;
  return React.createElement("h1", {}, sum);
}

ReactDOM.render(
  React.createElement(Adder, { n1: 2, n2: 4 }),
  document.getElementById("app")
);
