import styled from "styled-components";
import { Minus, Plus } from "@styled-icons/heroicons-solid";
import { Device } from "./Device";

export const StyledButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export const PrimaryButton = styled(StyledButton)`
  /* Created with https://www.css-gradient.com */
  background: #24ff99;
  background: -webkit-radial-gradient(bottom, #24ff99, #b7ffd6);
  background: -moz-radial-gradient(bottom, #24ff99, #b7ffd6);
  background: radial-gradient(to top, #24ff99, #b7ffd6);
  color: white;
  font-weight: bold;
  padding: 0.5em 0.75em;
  border-radius: 25px;
  place-self: center;
  width: 100%;
  max-width: 8em;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media ${Device.laptop} {
    margin-top: 1em;
    font-size: 1.5rem;
  }
`;

export const StyledPlus = styled(Plus)`
  color: #24ff99;
`;

export const StyledMinus = styled(Minus)`
  color: #24ff99;
`;
