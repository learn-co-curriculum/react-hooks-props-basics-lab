import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Links from "../components/Links";

test("renders the h3 with the text 'Links'", () => {
  render(<Links />);
  expect(screen.queryByText("Links")).toBeInTheDocument();
});

test("displays the URL of a Github link passed down as a prop", () => {
  render(<Links github={"https://github.com/liza"} />);
  expect(screen.queryByText("https://github.com/liza")).toBeInTheDocument();
});

test("displays the URL of a Linkedin link passed down as a prop", () => {
  render(<Links linkedin={"https://www.linkedin.com/in/liza/"} />);
  expect(
    screen.queryByText("https://www.linkedin.com/in/liza/")
  ).toBeInTheDocument();
});
