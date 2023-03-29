import { SafeAreaView } from "react-native-safe-area-context"
import styled, { css } from "styled-components/native"

type ContainerProps = {
  isInDiet: boolean
}

export const Container = styled(SafeAreaView).attrs({
  edges: ['right', 'bottom', 'left']
}) <ContainerProps>`
  flex: 1;
  background-color: ${({ theme, isInDiet }) => isInDiet ? theme.COLORS.LIGHT_GREEN : theme.COLORS.LIGHT_RED};
`

export const Header = styled.View`
  position: relative;
  
  height: 132px;
  width: 100%;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILIES.BOLD};
    font-size: ${theme.FONT_SIZES.XLARGE};
  `}
`

export const Form = styled.View`
  margin-top: -28px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  flex: 1;

  padding: 40px 24px;
  justify-content: space-between;
`

export const MealName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILIES.BOLD};
    font-size: 20px;
  `}
`

export const DateTime = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILIES.BOLD};
    font-size: ${theme.FONT_SIZES.MEDIUM};
  `}
`

export const Paragraph = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILIES.REGULAR};
    font-size: ${theme.FONT_SIZES.LARGE};
  `}
`

export const DietStatus = styled.View`
  padding: 8px 16px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  gap: 8px;
`

export const DietStatusText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILIES.REGULAR};
    font-size: ${theme.FONT_SIZES.MEDIUM};
  `}
  text-transform: lowercase;
`

export const Ball = styled.Text<ContainerProps>`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background-color: ${({ theme, isInDiet }) => isInDiet ? theme.COLORS.DARK_GREEN : theme.COLORS.DARK_RED};
`