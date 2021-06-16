import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";

import { Header } from "../../components";

describe("<Header />", () => {
  jest.mock("react-router-dom");

  it("Renders the basic <Header /> with a background", () => {
    const { container, getByText, getByTestId } = render(
      <Router>
        <Header>
          <Header.Frame>
            <Header.Logo src="/logo.svg" alt="Netflix" />
            <Header.TextLink active="true">TestLink</Header.TextLink>
          </Header.Frame>
        </Header>
      </Router>
    );

    expect(getByText("TestLink")).toBeTruthy();
    expect(getByTestId("header-bg")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Renders the basic <Header /> without a background", () => {
    const { container, getByText, queryByTestId } = render(
      <Router>
        <Header background={false}>
          <Header.Frame>
            <Header.Logo src="/logo.svg" alt="Netflix" />
            <Header.ButtonLink>Sign In</Header.ButtonLink>
            <Header.TextLink active={false}>TestLink</Header.TextLink>
          </Header.Frame>
        </Header>
      </Router>
    );

    expect(getByText("TestLink")).toBeTruthy();
    expect(queryByTestId("header-bg")).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Renders the full <Header /> with a background", () => {
    const { container, getByText, getByTestId } = render(
      <Router>
        <Header src="joker1" dontShowOnSmallViewPort>
          <Header.Frame>
            <Header.Group>
              <Header.Logo src="/images/logo.svg" alt="Netflix" />
              <Header.TextLink active={false} onClick={() => {}}>
                Series
              </Header.TextLink>
              <Header.TextLink active onClick={() => {}}>
                Films
              </Header.TextLink>
            </Header.Group>
            <Header.Group>
              <Header.Search searchTerm="Joker" setSearchTerm={() => {}} />
              <Header.Profile>
                <Header.Picture src="/images/test.png" />
                <Header.Dropdown>
                  <Header.Group>
                    <Header.Picture src="/images/test.png" />
                    <Header.TextLink>TestLink</Header.TextLink>
                  </Header.Group>
                  <Header.Group>
                    <Header.TextLink onClick={() => {}}>
                      Sign out
                    </Header.TextLink>
                  </Header.Group>
                </Header.Dropdown>
              </Header.Profile>
            </Header.Group>
          </Header.Frame>

          <Header.Feature>
            <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
            <Header.Text>Forever alone in a crowd...</Header.Text>
            <Header.PlayButton>Play</Header.PlayButton>
          </Header.Feature>
        </Header>
      </Router>
    );

    expect(getByTestId("search-input")).toBeTruthy();
    expect(getByTestId("search-input").value).toBe("Joker");
    userEvent.type(getByTestId("search-input"), {
      target: { value: "Simpsons" },
    });
    userEvent.click(getByTestId("search-click"));

    expect(getByText("Series")).toBeTruthy();
    expect(getByText("Films")).toBeTruthy();
    expect(getByText("TestLink")).toBeTruthy();
    expect(getByText("Watch Joker Now")).toBeTruthy();
    expect(getByText("Sign out")).toBeTruthy();
    expect(getByText("Forever alone in a crowd...")).toBeTruthy();
    expect(getByText("Play")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
