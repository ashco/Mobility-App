import Link from "next/link";
import styled from "styled-components";

import NavLinkStyle from "./NavLinkStyle";
import ExercisesIcon from "./Icons/Exercises";
import PrescriptionsIcon from "./Icons/Prescriptions";
import CalendarIcon from "./Icons/Calendar";

import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  const { pathname } = router;
  console.log(pathname);
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
  a {
    /* color: #fff;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center; */
  }
  /* a:after {
    content: ".";
    color: #fff;
    font-weight: bold;
    font-size: 28px;
    line-height: 0;
  } */
`;

export default Nav;
