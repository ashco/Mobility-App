import Link from "next/link";
import styled from "styled-components";

import NavLinkStyle from "./NavLinkStyle";
import ExercisesIcon from "./Icons/ExercisesIcon";
import PrescriptionsIcon from "./Icons/PrescriptionsIcon";
import CalendarIcon from "./Icons/CalendarIcon";

import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <NavWrapper>
      <Link href="/exercises">
        <NavLinkStyle active={pathname === "/exercises"}>
          <ExercisesIcon />
        </NavLinkStyle>
      </Link>
      <Link href="/prescriptions">
        <NavLinkStyle active={pathname === "/prescriptions"}>
          <PrescriptionsIcon />
        </NavLinkStyle>
      </Link>
      <Link href="/calendar">
        <NavLinkStyle active={pathname === "/calendar"}>
          <CalendarIcon />
        </NavLinkStyle>
      </Link>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #464646;
`;

export default Nav;
