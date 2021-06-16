import { queryByText, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import faqData from "../../fixtures/faqs.json";
import { Accordion } from "../../components";

describe("<Accordion />", () => {
  it("Renders <Accordion /> with populated data", () => {
    const { container, getByText } = render(
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        {faqData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    );

    expect(getByText("Frequently Asked Questions")).toBeTruthy();
    expect(getByText("What is Netflix?")).toBeTruthy();
    expect(getByText("Where can I watch?")).toBeTruthy();
    expect(getByText("How do I cancel?")).toBeTruthy();
    expect(getByText("What can I watch on Netflix?")).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("Opens and closes the <Accordion /> component when clicked", () => {
    const { container, queryByText } = render(
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        {faqData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    );

    const faqText =
      "Netflix has an extensive library of feature films, documentaries, TV programmes, anime, award-winning Netflix originals, and more. Watch as much as you want, any time you want.";

    expect(queryByText(faqText)).toBeFalsy();

    userEvent.click(queryByText("What can I watch on Netflix?"));
    expect(queryByText(faqText)).toBeTruthy();

    userEvent.click(queryByText("What can I watch on Netflix?"));
    expect(queryByText(faqText)).toBeFalsy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
