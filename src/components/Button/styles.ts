import styled, { css } from "styled-components/native";
import { AntDesign } from '@expo/vector-icons'

type ContainerProps = {
  variation: 'PRIMARY' | 'SECONDARY'
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 100%;
  height: 50px;

  ${({ theme, variation }) => css`
      background-color: ${variation === 'PRIMARY' ? theme.COLORS.GRAY_600 : theme.COLORS.WHITE};
      border: 1px solid ${theme.COLORS.GRAY_600};
  `}


  justify-content: center;
  flex-direction: row;
  align-items: center;
  border-radius: 6px;
`

export const Title = styled.Text<ContainerProps>`
  font-size: ${({ theme }) => theme.FONT_SIZES.MEDIUM};
  font-family: ${({ theme }) => theme.FONT_FAMILIES.BOLD};
  line-height: 18.2px;
  color: ${({ theme, variation }) => variation === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};
`

type IconProps = {
  icon: keyof typeof AntDesign.glyphMap
  variation: 'PRIMARY' | 'SECONDARY'
}

export const Icon = styled(AntDesign).attrs<IconProps>(({ icon, theme, variation }) => ({
  name: icon,
  size: 18,
  color: variation === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700,
}))`
  margin-right: 12px;
`