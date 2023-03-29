import { ArrowLeft } from 'phosphor-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from "styled-components/native";

type ContainerProps = {
  variation: 'POSITIVE' | 'NEGATIVE'
}

export const Container = styled(SafeAreaView).attrs<ContainerProps>({
  edges: ['right', 'bottom', 'left']
}) <ContainerProps>`
  background-color: ${({ theme, variation }) => variation === 'POSITIVE' ? theme.COLORS.LIGHT_GREEN : theme.COLORS.LIGHT_RED};
  flex: 1;
  position: relative;
`

export const Header = styled.View`
  justify-content: center;
  align-items: center;

  height: 200px;
`

export const Button = styled.TouchableOpacity`
  position: absolute;
  top: 56px;
  left: 24px;
  z-index: 1;
`

export const Icon = styled(ArrowLeft).attrs<ContainerProps>(({ theme, variation }) => ({
  size: 24,
  color: variation === 'POSITIVE' ? theme.COLORS.DARK_GREEN : theme.COLORS.DARK_RED
})) <ContainerProps>``

export const Stats = styled.View`
  margin-top: -32px;
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  padding: 32px 24px;

  gap: 12px;
  align-items: center;
`

export const StatsTitle = styled.Text`
    ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILIES.BOLD};
    font-size: ${theme.FONT_SIZES.MEDIUM};
  `}
  margin-bottom: 22px;
`

export const TwoBoxStats = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 12px;
`