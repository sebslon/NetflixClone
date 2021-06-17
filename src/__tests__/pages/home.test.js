import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";

import { Home } from "../../pages";

describe("Homepage", () => {
  it("Renders Homepage", () => {
    const { getByText, getAllByPlaceholderText } =
      render(
        <Router>
          <Home />
        </Router>
      );

    expect(getByText("Unlimited films, TV programmes and more.")).toBeTruthy();
    expect(getByText("Watch anywhere. Cancel at any time.")).toBeTruthy();
    expect(getAllByPlaceholderText("Email address")).toBeTruthy();
    expect(getByText("Get Started")).toBeTruthy();
    expect(
      getByText(
        "Ready to watch? Enter your email to create or restart your membership."
      )
    ).toBeTruthy();
  });
});
