import { render } from "@testing-library/react";

import { CtaForm } from "../../components";

describe("<OptForm />", () => {
  it("renders the <OptForm /> with populated data", () => {
    const { container, getByText, getByPlaceholderText } = render(
      <CtaForm>
        <CtaForm.Input placeholder="Email address" />
        <CtaForm.Button>Try it now</CtaForm.Button>
        <CtaForm.Break />
        <CtaForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </CtaForm.Text>
      </CtaForm>
    );

    expect(getByText("Try it now")).toBeTruthy();
    expect(
      getByText(
        "Ready to watch? Enter your email to create or restart your membership."
      )
    ).toBeTruthy();
    expect(getByPlaceholderText("Email address")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
