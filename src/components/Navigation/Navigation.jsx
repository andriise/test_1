import { StyledLink, StyledList } from './Navigation.styled';

const Navigation = () => {
  return (
    <StyledList>
      <li>
        <StyledLink to="/">HOME</StyledLink>
      </li>
      <li>
        <StyledLink to="/tweets">TWEETS</StyledLink>
      </li>
    </StyledList>
  );
};

export default Navigation;
