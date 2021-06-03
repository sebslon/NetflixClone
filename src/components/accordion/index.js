import React, { createContext, useState, useContext } from "react";

import {
  Body,
  Container,
  Header,
  Item,
  Inner,
  Title,
} from "./styles/accordion";

const ToggleContext = createContext();

export default function Accordion({ children, ...otherProps }) {
  return (
    <Container {...otherProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...otherProps }) {
  return <Title {...otherProps}>{children}</Title>;
};

Accordion.Item = function AccordionItem({ children, ...otherProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...otherProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...otherProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header
      onClick={() => setToggleShow((prevState) => !prevState)}
      {...otherProps}
    >
      {children}
      {toggleShow ? (
        <img src="images/icons/close-slim.png" alt="close" />
      ) : (
        <img src="images/icons/add.png" alt="open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...otherProps }) {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? <Body {...otherProps}>{children}</Body> : null;
};
