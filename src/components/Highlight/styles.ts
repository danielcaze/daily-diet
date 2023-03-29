import styled, { css } from "styled-components/native";

type ContainerProps = {
  size: 'MD' | 'LG'
}

export const Container = styled.View<ContainerProps>`
  gap: ${({ size }) => size === 'MD' ? '8px' : '2px'};
  align-items: center;
`

export const Title = styled.Text<ContainerProps>`
  ${({ theme, size }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILIES.BOLD};
    font-size: ${size === 'MD' ? theme.FONT_SIZES.XXLARGE : theme.FONT_SIZES.XXXLARGE};
  `}
  text-align: center;
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILIES.REGULAR};
    font-size: ${theme.FONT_SIZES.MEDIUM};
  `}
  text-align: center;
`