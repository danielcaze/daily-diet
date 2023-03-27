import { ArrowUpRight } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

type ContainerProps = {
  variant: 'POSITIVE' | 'NEGATIVE'
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

  background-color: ${({ theme, variant }) => variant === 'POSITIVE' ? theme.COLORS.LIGHT_GREEN : theme.COLORS.LIGHT_RED};
`

export const Button = styled.TouchableOpacity`
  position: absolute;
  top: 8px;
  right: 8px;
`

export const Icon = styled(ArrowUpRight).attrs<ContainerProps>(({ theme, variant }) => ({
  size: 24,
  color: variant === 'POSITIVE' ? theme.COLORS.DARK_GREEN : theme.COLORS.DARK_RED
})) <ContainerProps>``