import styled from "styled-components";

export enum ButtonModeColorEnum {
	WHITE = "#FFFDFD",
	DARK = "#382633",
	PRIMARY = "#01295F",
	LINK = "#437F97",
	INFO = "#849324",
	WARNING = "#FFB30F",
	ERROR = "#FD151B",
}

export enum ButtonMode {
	WHITE = "WHITE",
	DARK = "DARK",
	PRIMARY = "PRIMARY",
	LINK = "LINK",
	INFO = "INFO",
	WARNING = "WARNING",
	ERROR = "ERROR",
}

const colors = {
	WHITE: { color: ButtonModeColorEnum.DARK, bgColor: ButtonModeColorEnum.WHITE, },
	DARK: { color: ButtonModeColorEnum.WHITE, bgColor: ButtonModeColorEnum.DARK, },
	PRIMARY: { color: ButtonModeColorEnum.WHITE, bgColor: ButtonModeColorEnum.PRIMARY, },
	LINK: { color: ButtonModeColorEnum.WHITE, bgColor: ButtonModeColorEnum.LINK, },
	INFO: { color: ButtonModeColorEnum.WHITE, bgColor: ButtonModeColorEnum.INFO, },
	WARNING: { color: ButtonModeColorEnum.DARK, bgColor: ButtonModeColorEnum.WARNING, },
	ERROR: { color: ButtonModeColorEnum.WHITE, bgColor: ButtonModeColorEnum.ERROR, },
};

interface IButtonProps {
	mode: ButtonMode;
}

export const Button = styled.button<IButtonProps>`
  border: 0;
  padding: 10px;
  border-radius: 10px;
  color: ${({ mode }) => colors[mode].color};
  background-color: ${({ mode }) => colors[mode].bgColor };
`;