import { TouchableOpacityProps } from 'react-native/types'
import { AntDesign } from '@expo/vector-icons'
import { Container, Icon, Title } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  variation?: 'PRIMARY' | 'SECONDARY'
  icon?: keyof typeof AntDesign.glyphMap
  title: string
}

export function Button({ icon, title, variation = "PRIMARY", ...props }: ButtonProps) {
  return (
    <Container variation={variation} {...props}>
      {!!icon && <Icon icon={icon} variation={variation} />}
      <Title variation={variation}>{title}</Title>
    </Container>
  )
}