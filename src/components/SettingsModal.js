import { StyledModal, Container } from "./styles/Settings.styled";
import SettingsItem from "./SettingsItem";
import { PrimaryButton } from "./styles/Button.styled";
import settingsOptions from "../settings";

function SettingsModal() {
  return (
    <StyledModal>
      <Container>
        {settingsOptions.map((option) => {
          return <SettingsItem key={option.id} {...option} />;
        })}

        <PrimaryButton>Start</PrimaryButton>
      </Container>
    </StyledModal>
  );
}

export default SettingsModal;
