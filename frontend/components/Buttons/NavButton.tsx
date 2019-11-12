import styled from "styled-components";

const NavButtonStyle = styled.button`
  border: none;
  height: 50px;
  width: 50px;
  background: none;
  margin: auto;
  outline: none;
  color: #fff;
  &:hover {
    cursor: pointer;
  }
  svg {
    color: var(--bg-color);
    height: 100%;
    &:active {
      transform: scale(0.9);
    }
  }
`;

export default NavButtonStyle;
