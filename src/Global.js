import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: 0;
    transition: 0.3 ease;
  }

  body{
    background-color: #784513;;
    font-family: 'Agency FB', sans-serif;
    color: #784513;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Container = styled.div`
  width: 90%;
  height: 100vh;
  padding: 5px 10px;
  box-shadow: #784513 0px 2px 5px -1px, #784513 0px 1px 3px -1px;
  position: relative;
  background-color: #faecc0;
`;

export const FlexArea = styled.div`
  display: flex;
  width: 100%;
  border: ${(props) => props.border || "none"};
  height: ${(props) => props.height || "none"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  flex-direction: ${(props) => props.direction || "row"};
  gap: ${(props) => props.gap || "5px"};
`;

export const Header = styled.h1`
  width: 100%;
  font-size: 2em;
  text-align: center;
`;

export const InfoGame = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 20px;
`;

export const Letter = styled.div`
  width: 25px;
  display: flex;
  justify-content: center;
  margin-right: 5px;
  color: #784513;
`;

export const Space = styled.div`
  width: 25px;
  border-bottom: 2px solid #784513;
  display: flex;
  justify-content: center;
  margin-right: 5px;
  margin-top: 20px;
`;
