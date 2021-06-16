import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import { Form } from "../../components";

describe("<Form />", () => {
  it("Renders <Form /> with populated data", () => {
    const { container, getByText, getByPlaceholderText } = render(
      <Router>
        <Form>
          <Form.Title>Sign In Now</Form.Title>
          <Form.Base>
            <Form.Input placeholder="Email address" onChange={() => {}} />
            <Form.Input
              type="password"
              placeholder="Password"
              onChange={() => {}}
            />
            <Form.Submit type="submit" disabled>
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>

          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </Router>
    );

    expect(
      getByText(
        "This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more."
      )
    ).toBeTruthy();

    expect(getByText("Sign In Now")).toBeTruthy();
    expect(getByText("Sign In")).toBeTruthy();
    expect(getByPlaceholderText("Email address")).toBeTruthy();
    expect(getByPlaceholderText("Password")).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("Renders the <Form /> with an error", () => {
    const { container, getByText, queryByText } = render(
      <Form>
        <Form.Error>Your email address is already in use.</Form.Error>
        <Form.Submit type="submit">Sign In</Form.Submit>
      </Form>
    );

    expect(getByText("Your email address is already in use.")).toBeTruthy();
  });
});
