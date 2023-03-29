import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 49px;

  padding: 14px 16px;
  margin-top: 8px;

  flex-direction: row;
  align-items: center;

  border-radius: 6px;
  border: ${({ theme }) => `1px solid ${theme.COLORS.GRAY_300}`};
`

export const Time = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILIES.BOLD};
    font-size: ${theme.FONT_SIZES.SMALL};
  `}
  margin-right: 12px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILIES.REGULAR};
    font-size: ${theme.FONT_SIZES.LARGE};
  `}
  padding-left: 12px;
  flex: 1;
`

type StatusBallProps = {
  variation: 'HEALTHY' | 'JUNK'
}

export const StatusBall = styled.View<StatusBallProps>`
  width: 14px;
  height: 14px;
  border-radius: 999px;

  background-color: ${({ theme, variation }) => variation === 'HEALTHY' ? theme.COLORS.GREEN : theme.COLORS.RED};
`