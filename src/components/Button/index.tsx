import { TouchableOpacityProps } from 'react-native/types'
import { AntDesign } from '@expo/vector-icons'
import { Container, Icon, Title } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  icon?: keyof typeof AntDesign.glyphMap
  title: string
}

export function Button({ icon, title, ...props }: ButtonProps) {
  return (
    <Container {...props}>
      {!!icon && <Icon icon={icon} />}
      <Title>{title}</Title>
    </Container>
  )
}