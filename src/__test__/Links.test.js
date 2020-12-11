import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("<Links />", () => {
  test("is exported from './src/components/Links'", () => {
    expect(() => {
      require("../components/Links");
    }).not.toThrow();
  });

  test("renders the h3 with the text 'Links'", () => {
    const Links = require("../components/Links");
    render(<Links />);
    expect(screen.queryByText("Links")).toBeInTheDocument();
  });

  test("displays a Github link passed down as a prop", () => {
    const Links = require("../components/Links");
    render(<Links github={"https://github.com/liza"} />);
    expect(screen.queryByText("https://github.com/liza")).toBeInTheDocument();
  });

  test("displays a Linkedin link passed down as a prop", () => {
    const Links = require("../components/Links");
    render(<Links linkedin={"https://www.linkedin.com/in/liza/"} />);
    expect(
      screen.queryByText("https://www.linkedin.com/in/liza/")
    ).toBeInTheDocument();
  });
});
