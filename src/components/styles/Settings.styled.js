import styled from "styled-components";
import { Device } from "./Device";

export const StyledModal = styled.section`
  grid-area: 1/1/-1/-1;
  background: white;

  color: black;
  display: grid;
  grid-template-columns: 2em 1fr 2em;
  place-content: center;

  @media ${Device.tablet} {
    grid-area: 2 /2 / 3/ 3;
    border-radius: 25px;
  }
`;

export const Container = styled.div`
  margin-top: 2.5em;
  grid-column: 2/-2;
  padding-inline: clamp(2em, 5vh, 4em);
  display: grid;
  row-gap: 2.25em;

  // @media ${Device.tablet} {
  //   grid-area: 2 /2 / 3/ 3;
  //   border-radius: 25px;
  // }
`;

export const StyledItem = styled.div`
  @media ${Device.laptop} {
    // display: flex;
    // justify-content: space-between;
    display: grid;
    grid-template-columns: 0.5fr 1fr 0.5fr;
  }

  h3 {
    text-align: center;
    letter-spacing: 1px;
    margin-bottom: 0.25em;
    font-size: 1.5em;
    font-weight: 500;

    @media ${Device.laptop} {
      text-align: left;
    }
  }
`;

export const StyledCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${Device.laptop} {
    // flex-grow: 0.25;
    grid-column: 3/4;
  }

  h4 {
    font-weight: 300;
    font-size: 1.5em;
  }
`;
