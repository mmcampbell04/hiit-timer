import styled from "styled-components";

export const StyledMain = styled.main`
  height: 100vh;
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  grid-template-rows: 0.25fr 1fr 0.25fr;
  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #434343,
    #000000
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #434343,
    #000000
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
