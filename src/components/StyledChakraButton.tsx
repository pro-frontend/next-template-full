import { Button } from "@chakra-ui/react";
import styled from "styled-components";
import { ButtonModeColorEnum } from "@/components/Button";

export const StyledChakraButton = styled(Button)`
  color: ${ButtonModeColorEnum.INFO};
  
  &:hover {
    filter: opacity(77%);
  }
`;