import React from 'react';
import styled from 'styled-components';

export const Spinner = (props) => (
    <StyledSpinner viewBox="0 0 50 50" show={props.show}>
        <circle
            className="path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="2"
        />
    </StyledSpinner>
);

const StyledSpinner = styled.svg`
  display: ${props => props.show ? 'block' : 'none'};
  animation: rotate 1s linear infinite;
  position: relative;
  margin: auto;
  width: 50px;
  height: 50px;
  z-index: 1000;

  & .path {
    stroke: #5652bf;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;