import { createContext, useContext, useState } from "react";

import {
  Container,
  Entities,
  Group,
  Item,
  Image,
  Meta,
  SubTitle,
  Title,
  Text,
} from "./styles/card";

export const FeatureContext = createContext();

export default function Card({ children, ...otherProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
    >
      <Container {...otherProps}>{children}</Container>
    </FeatureContext.Provider>
  );
}

Card.Group = function CardGroup({ children, ...otherProps }) {
  return <Group {...otherProps}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...otherProps }) {
  return <Title {...otherProps}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...otherProps }) {
  return <SubTitle {...otherProps}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...otherProps }) {
  return <Text {...otherProps}>{children}</Text>;
};

Card.Entities = function CardEntity({ children, ...otherProps }) {
  return <Entities {...otherProps}>{children}</Entities>;
};

Card.Meta = function CardMeta({ children, ...otherProps }) {
  return <Meta {...otherProps}>{children}</Meta>;
};

Card.Item = function CardItem({ item, children, ...otherProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);

  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...otherProps}
    >
      {children}
    </Item>
  );
};

Card.Image = function CardImage({ ...otherProps }) {
  return <Image {...otherProps} />;
};
