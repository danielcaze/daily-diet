import styled, { css } from "styled-components/native";
import { Box } from "../../../../components/Box";

type ContainerProps = {
  checked: boolean
  variation: 'IN' | 'OUT'
}

export const Container = styled(Box) <ContainerProps>`
  width: 100%;
  padding: 16px;
  align-items: center;
  border-radius: 6px;
  gap: 8px;
  justify-content: center;
  flex-direction: row;

  border: 1px solid ${({ theme, checked, variation }) => (
    checked ? variation === 'IN' ? theme.COLORS.DARK_GREEN : theme.COLORS.DARK_RED : 'transparent'
  )};
  background-color: ${({ theme, checked, variation }) => (
    checked ? variation === 'IN' ? theme.COLORS.LIGHT_GREEN : theme.COLORS.LIGHT_RED : theme.COLORS.GRAY_200
  )};
`

type DotProps = {
  variation: 'IN' | 'OUT'
}

export const Dot = styled.View<DotProps>`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background-color: ${({ theme, variation }) => variation === 'IN' ? theme.COLORS.DARK_GREEN : theme.COLORS.DARK_RED};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILIES.BOLD};
    font-size: ${theme.FONT_SIZES.MEDIUM};
  `}
`