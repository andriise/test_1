import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #ebd8ff;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-size: 25px;
  display: flex;
  justify-content: space-around;
  padding: 30px 0;
  font-weight: 500;
  transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &.active,
  &:hover,
  &:focus {
    color: #5cd3a8;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 300px;
`;
