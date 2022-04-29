import React from "react";
import GlobalStyle from "./components/styles/Globals.styles";
import SettingsModal from "./components/SettingsModal";
import { StyledMain } from "./components/styles/Layouts.styled";

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledMain>
        <SettingsModal />
      </StyledMain>
    </>
  );
}

export default App;
