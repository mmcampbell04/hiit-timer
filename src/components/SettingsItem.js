import { StyledItem, StyledCounter } from "./styles/Settings.styled";
import { StyledButton, StyledMinus, StyledPlus } from "./styles/Button.styled";

function SettingsItem({ title, amount, id }) {
  return (
    <StyledItem>
      <h3>{title}</h3>
      <StyledCounter>
        <StyledButton
          onClick={() => {
            console.log("decrease me!");
          }}
        >
          <StyledMinus size="30" />
        </StyledButton>
        <h4>{amount}</h4>

        <StyledButton
          onClick={() => {
            console.log("increase me!");
          }}
        >
          <StyledPlus size="30" />
        </StyledButton>
      </StyledCounter>
    </StyledItem>
  );
}

export default SettingsItem;
