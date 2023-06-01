import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 94%;
  border: 1px solid none;
  background-color: #784513;
  color: white;
  text-align: center;
  gap: 10px;

  transition: 0.7s;
  top: ${(props) => (props.open ? "0" : "100%")};
  top: ${(props) => (props.close ? "100%" : "0")};
  opacity: ${(props) => (props.open ? "1" : "0")};
  opacity: ${(props) => (props.close ? "0" : "1")};

  h1 {
    font-size: 4em;
    background-color: orange;
    padding: 10px;
  }
  p {
    font-size: 1.5em;
    font-style: italic;
    margin: 10px;
  }

  h3 {
    font-size: 1.2em;
  }
  h2 {
    font-size: 3em;
    color: orange;
  }

  button {
    border: none;
    border-radius: 5px;
    background: white;
    height: 40px;
    color: #784513;
    padding: 10px;
    margin: 10px;

    &:hover {
      cursor: pointer;
    }
  }
`;
