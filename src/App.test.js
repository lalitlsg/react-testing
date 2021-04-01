import React from "react";
import { render } from "@testing-library/react";
import App, { add } from "./App";

// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// unit test
test("add", () => {
  const value = add(2, 3);
  expect(value).toBe(5);
  expect(add(5, 5)).toBe(10);
});
