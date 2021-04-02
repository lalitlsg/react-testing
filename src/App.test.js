import React from "react";
import App, { add, total } from "./App";
import { render } from "@testing-library/react";

// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// unit test
// test("add", () => {
//   const value = add(2, 3);
//   expect(value).toBe(5);
//   expect(add(5, 5)).toBe(10);
// });

// integration test
// test("total", () => {
//   expect(total(10, 10)).toBe("$20");
// });

// component render testing

// test("should contain", () => {
//   const root = document.createElement("div");
//   ReactDOM.render(<App />, root);
//   expect(root.querySelector("h1").textContent).toBe("Learn React Testing");
//   expect(root.querySelector("button").id).toBe("btn");
// });

test("should contain", () => {
  const { getByText } = render(<App />);
  getByText("Learn React Testing");
  getByText("Click");
});
