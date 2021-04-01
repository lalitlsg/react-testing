import React from "react";
import styled, { css, keyframes } from "styled-components";

const right = keyframes`
    0%{
        width: 50px;
    }
    100%{
        width: 200px;
    }
`;

const StyledButton = styled.button`
  font-size: 1em;
  &:hover {
    background-color: grey;
    animation: ${right} 3s ease-in;
  }
  ${({ primary }) =>
    primary
      ? css`
          color: white;
          background-color: red;
        `
      : css`
          color: black;
          background-color: green;
        `};
  & .lalit {
    color: black;
  }
`;

const SecondButton = styled(StyledButton)`
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  border: none;
  margin: 10px;
`;

const Button = ({ primary, children }) => {
  //   console.log(primary);
  return (
    <SecondButton primary={primary}>
      {children}
      <p className="lalit">L</p>
    </SecondButton>
  );
};

export default Button;
