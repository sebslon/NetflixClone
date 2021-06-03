import { Break, Container, Input, Button, Text } from './styles/cta-form';

export default function CtaForm({ children, ...otherProps }) {
  return (
    <Container {...otherProps}>{children}</Container>
  )
}

CtaForm.Input = function CtaFormInput({ ...otherProps }) {
  return <Input {...otherProps} />
}

CtaForm.Button = function CtaFormButton({ children, ...otherProps }) {
  return (
    <Button {...otherProps}>
      {children} <img src="images/icons/chevron-right.png" alt="Try now" />
    </Button>
  )
};

CtaForm.Text = function CtaFormText({ children, ...otherProps }) {
  return <Text {...otherProps}>{children}</Text>
}

CtaForm.Break = function CtaFormBreak({...otherProps}) {
  return <Break {...otherProps} />;
}