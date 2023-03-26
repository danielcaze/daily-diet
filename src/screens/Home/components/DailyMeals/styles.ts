import styled, { css } from "styled-components/native";

export const Date = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.XLARGE};
    font-family: ${theme.FONT_FAMILIES.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`