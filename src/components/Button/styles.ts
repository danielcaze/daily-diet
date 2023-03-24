import styled from "styled-components/native";
import { AntDesign } from '@expo/vector-icons'

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  justify-content: center;
  flex-direction: row;
  align-items: center;
  border-radius: 6px;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZES.MEDIUM};
  font-family: ${({ theme }) => theme.FONT_FAMILIES.BOLD};
  line-height: 18.2px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`

type IconProps = {
  icon: keyof typeof AntDesign.glyphMap
}

export const Icon = styled(AntDesign).attrs<IconProps>(({ icon, theme }) => ({
  name: icon,
  size: 18,
  color: theme.COLORS.WHITE
}))`
  margin-right: 12px;
`