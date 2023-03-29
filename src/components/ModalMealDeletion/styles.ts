import styled, { css } from "styled-components/native";

export const Background = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.5);
`

export const Container = styled.View`
  margin: 24px;
  padding: 24px;
  align-self: stretch;
  gap: 32px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILIES.BOLD};
    font-size: ${theme.FONT_SIZES.XLARGE};
  `}
  text-align: center;
`