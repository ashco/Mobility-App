import Link from "next/link";
import styled from "styled-components";

import NavButton from "./Buttons/NavButton";
import ExercisesIcon from "./Icons/Exercises";
import PrescriptionsIcon from "./Icons/Prescriptions";
import CalendarIcon from "./Icons/Calendar";

const Nav = () => (
  <NavWrapper>
    <Link href="/exercises">
      <a>
        <NavButton>
          <ExercisesIcon />
        </NavButton>
      </a>
    </Link>
    <Link href="/prescriptions">
      <a>
        <NavButton>
          <PrescriptionsIcon />
        </NavButton>
      </a>
    </Link>
    <Link href="/calendar">
      <a>
        <NavButton>
          <CalendarIcon />
        </NavButton>
      </a>
    </Link>
  </NavWrapper>
);

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #464646;
  a {
    color: #fff;
    margin: auto;
  }
`;

export default Nav;
