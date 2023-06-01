import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  justify-content: center;
  border: 1px solid #784513;
`;

export const KeyButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  border: 1px solid #784513;
  font-weight: 700;
  background-color: ${(props) => props.mark || "none"};
  color: ${(props) => (props.mark ? "white" : "#784513")};

  opacity: ${(props) => (!props.isActive ? "null" : "0.3")};

  /* &:focus {
    cursor: not-allowed;
  }

  &:focus-visible {
    cursor: not-allowed;
  } */

  &:hover:disabled {
    cursor: not-allowed;
  }

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;
