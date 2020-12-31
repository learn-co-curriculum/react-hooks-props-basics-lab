import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import user from "../data/user";
import App from "../components/App";

test("renders without errors", () => {
  expect(() => render(<App />)).not.toThrow();
});

test("renders the correct child components", () => {
  const { container } = render(<App />);
  expect(container.querySelector("nav")).toBeInTheDocument();
  expect(container.querySelector("#home")).toBeInTheDocument();
  expect(container.querySelector("#about")).toBeInTheDocument();
});

test("passes 'name', 'city', and 'color' to <Home> as props", () => {
  render(<App />);
  const h1 = screen.queryByText(
    `${user.name} is a Web Developer from ${user.city}`
  );
  expect(h1).toBeInTheDocument();
  expect(h1.style.color).toEqual(user.color);
});

test("passes 'bio' to <About> as a prop", () => {
  render(<App />);
  const p = screen.queryByText(user.bio);
  expect(p).toBeInTheDocument();
  expect(p.tagName).toEqual("P");
});

test("passes 'github' to <Links> as a prop, via <About>", () => {
  render(<App />);
  const a = screen.queryByText(user.links.github);
  expect(a).toBeInTheDocument();
  expect(a.tagName).toEqual("A");
});

test("passes 'linkedin' to <Links> as a prop, via <About>", () => {
  render(<App />);
  const a = screen.queryByText(user.links.linkedin);
  expect(a).toBeInTheDocument();
  expect(a.tagName).toEqual("A");
});
