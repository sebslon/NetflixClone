import { Container, Title, List, Item, Picture, Name } from './styles/profiles';

import { publicURL } from "../../constants";

export default function Profiles({ children, ...otherProps }) {
  return <Container {...otherProps}>{children}</Container>
}

Profiles.Title = function ProfilesTitle({ children, ...otherProps }) {
  return <Title {...otherProps}>{children}</Title>
}

Profiles.List = function ProfilesList({ children, ...otherProps }) {
  return <List {...otherProps}>{children}</List>
}

Profiles.User = function ProfilesItem({ children, ...otherProps }) {
  return <Item {...otherProps}>{children}</Item>
}

Profiles.Picture = function ProfilesPicture ({ src, children, ...otherProps }) {
  return <Picture {...otherProps} src={src ? `${publicURL}/images/users/${src}.png` : `${publicURL}/images/misc/loading.gif`}></Picture>
}

Profiles.Name = function ProfilesName ({ children, ...otherProps }) {
  return <Name {...otherProps}>{children}</Name>
}