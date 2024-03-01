import Tabs from "../components/Tabs";
import { cleanup, screen, render } from "@testing-library/react";

describe("Tabs", () => {
  afterEach(() => cleanup());

  it("Renders in DOM", () => {
    render(<Tabs data-testid="tabs" tabItems={[]} />);
    const tabs = screen.getByTestId("tabs");

    expect(() => tabs.not.toBeNull());
  });
});
