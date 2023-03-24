import { ArrowUpRight } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

type ContainerProps = {
  variant: 'PRIMARY' | 'SECONDARY'
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 102px;

  margin-top: 33px;

  text-align: center;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 8px;

  background-color: ${({ theme, variant }) => variant === 'PRIMARY' ? theme.COLORS.LIGHT_GREEN : theme.COLORS.LIGHT_RED};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILIES.BOLD};
    font-size: ${theme.FONT_SIZES.XXXLARGE};
    color: ${theme.COLORS.GRAY_700};
  `}
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILIES.REGULAR};
    font-size: ${theme.FONT_SIZES.MEDIUM};
    color: ${theme.COLORS.GRAY_600};
  `}
  margin-top: 0;
`

export const Button = styled.TouchableOpacity`
  position: absolute;
  top: 8px;
  right: 8px;
`

export const Icon = styled(ArrowUpRight).attrs<ContainerProps>(({ theme, variant }) => ({
  size: 24,
  color: variant === 'PRIMARY' ? theme.COLORS.DARK_GREEN : theme.COLORS.DARK_RED
}))``