import { Link as ReactRouterLink } from "react-router-dom";

import {
  Background,
  ButtonLink,
  Container,
  Dropdown,
  Feature,
  FeatureHeader,
  Group,
  Link,
  Logo,
  Picture,
  Profile,
  Text,
} from "./styles/header";

export default function Header({ background = true, children, ...otherProps }) {
  return background ? (
    <Background {...otherProps}>{children}</Background>
  ) : (
    children
  );
}

Header.Feature = function HeaderFeature({ children, ...otherProps }) {
  return <Feature {...otherProps}>{children}</Feature>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...otherProps }) {
  return <FeatureHeader {...otherProps}>{children}</FeatureHeader>
};

Header.Profile = function HeaderProfile({ children, ...otherProps }) {
  return <Profile {...otherProps}>{children}</Profile>
};

Header.Dropdown = function HeaderDropdown({ children, ...otherProps }) {
  return <Dropdown {...otherProps}>{children}</Dropdown>;
};

Header.Text = function HeaderText({ children, ...otherProps }) {
  return <Text {...otherProps}>{children}</Text>;
};

Header.TextLink = function HeaderTextLink({ children, ...otherProps }) {
  return <Link {...otherProps}>{children}</Link>;
};

Header.Frame = function HeaderFrame({ children, ...otherProps }) {
  return <Container {...otherProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...otherProps }) {
  return <Group {...otherProps}>{children}</Group>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...otherProps }) {
  return <ButtonLink {...otherProps}>{children}</ButtonLink>;
};

Header.Logo = function HeaderLogo({ to, ...otherProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...otherProps} />
    </ReactRouterLink>
  );
};

Header.Picture = function HeaderPicture({ src, ...otherProps }) {
  return <Picture {...otherProps} src={`/images/users/${src}.png`} />
}
