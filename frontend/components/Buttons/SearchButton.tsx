import styled from "styled-components";

const SearchButtonStyle = styled.button`
  border: none;
  background: none;
  margin: auto;
  outline: none;
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

export default SearchButtonStyle;
