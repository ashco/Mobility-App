import styled from "styled-components";

const NavLinkStyle = styled.a`
  border: none;
  background: none;
  margin: auto;
  padding: 0;
  outline: none;

  /* color: #fff; */
  display: flex;
  flex-direction: column;
  align-items: center;

  :after {
    content: ".";
    color: ${props => (props.active ? "#fff" : "#464646")};
    font-weight: bold;
    font-size: 28px;
    line-height: 0;
  }
  &:hover {
    cursor: pointer;
  }
  svg {
    height: 100%;
    &:active {
      transform: scale(0.9);
    }
  }
`;

export default NavLinkStyle;
