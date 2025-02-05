import Link from "next/link";

import styled from "styled-components";
import styles from "@/styles";

const StyledNav = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 2px;
  height: 40px;
  align-items: center;
`;

const StyledLi = styled.li`
  list-style-type: none;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 28px;
  background: darkgrey;
  padding: 10px 50px;
`;

export default function Navigation() {
  return (
    <StyledNav>
      <StyledLi>
        <StyledLink href="/">Spotlight</StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink href="/art-pieces">Gallery</StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink href="/favorites">Favorites</StyledLink>
      </StyledLi>
    </StyledNav>
  );
}
