import { Accordion } from "../components";
import { CtaForm } from "../components";

import faqData from "../fixtures/faqs.json";

export function FaqContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}

      <CtaForm>
        <CtaForm.Text>Ready to watch? Enter your email to create or restart your membership</CtaForm.Text>
        <CtaForm.Break />
        <CtaForm.Input placeholder="Email address" />
        <CtaForm.Button>Try it now!</CtaForm.Button>
      </CtaForm>
    </Accordion>

  );
}
