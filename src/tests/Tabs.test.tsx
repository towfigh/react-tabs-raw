import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import Tabs from "../components/Tabs";

describe("Tabs", () => {
  afterEach(() => cleanup());

  it("Renders in DOM", () => {
    render(<Tabs data-testid="tabs" tabItems={[]} />);
    const tabs = screen.getByTestId("tabs");

    expect(tabs).toBeInTheDocument();
  });
});
