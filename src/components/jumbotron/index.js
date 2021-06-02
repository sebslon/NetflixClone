import React from 'react';

import { Container, Inner, Item, Pane, Title, SubTitle, Image } from './styles/jumbotron';

export default function Jumbotron({ children, direction = 'row', ...otherProps }) {
  return (
    <Item>
      <Inner direction={direction}>
        {children}
      </Inner>
    </Item>
  )
}

Jumbotron.Container = function JumbotronContainer({ children, ...otherProps }) {
  return <Container {...otherProps}>{children}</Container>
}

Jumbotron.Pane = function JumbotronPane({ children, ...otherProps }) {
  return <Pane {...otherProps}>{children}</Pane>
}

Jumbotron.Title = function JumbotronTitle({ children, ...otherProps }) {
  return <Title {...otherProps}>{children}</Title>
}

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...otherProps }) {
  return <SubTitle {...otherProps}>{children}</SubTitle>
}

Jumbotron.Image = function JumbotronImage({ ...otherProps }) {
  return <Image {...otherProps} />
}