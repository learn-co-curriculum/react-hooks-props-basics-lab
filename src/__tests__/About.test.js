import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import user from "../data/user";
import About from "../components/About";

test("renders a <p> element with the bio from props", () => {
  render(<About bio="I made this" links={user.links} />);
  expect(screen.queryByText("I made this")).toBeInTheDocument();
});

test("does not render a <p> element if the bio is not included in props", () => {
  const { container } = render(<About links={user.links} />);
  expect(container.querySelector("p")).toBeNull();
});

test("does not render a <p> element if the bio is an empty string", () => {
  const { container } = render(<About bio="" links={user.links} />);
  expect(container.querySelector("p")).toBeNull();
});
