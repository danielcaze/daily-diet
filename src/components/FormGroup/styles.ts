import styled, { css } from "styled-components/native";

export const Container = styled.View`
  align-self: stretch;
  justify-self: stretch;
  width: 100%;
  gap: 4px;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILIES.BOLD};
    font-size: ${theme.FONT_SIZES.MEDIUM};
  `}
`

export const Input = styled.TextInput`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILIES.REGULAR};
    font-size: ${theme.FONT_SIZES.LARGE};
    border: 1px solid ${theme.COLORS.GRAY_300};
  `}

  border-radius: 6px;
  padding: 14px;
`