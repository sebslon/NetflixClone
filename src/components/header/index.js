import { Link } from 'react-router-dom';

import { Background, Container, ButtonLink, Logo } from './styles/header';

export default function Header({ background = true, children, ...otherProps }) {
  return background ? <Background {...otherProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...otherProps }) {
  return <Container {...otherProps}>{children}</Container>;
}

Header.ButtonLink = function HeaderButtonLink({ children, ...otherProps }) {
  return <ButtonLink {...otherProps}>{children}</ButtonLink>;
}

Header.Logo = function HeaderLogo({ to, ...otherProps }) {
  return (
    <Link to={to}>
      <Logo {...otherProps} />
    </Link>
  )
}
