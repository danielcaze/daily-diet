import { AntDesign } from '@expo/vector-icons'
import { Container, Icon, Title } from "./styles";

type ButtonProps = {
  icon?: keyof typeof AntDesign.glyphMap
  title: string
}

export function Button({ icon, title }: ButtonProps) {
  return (
    <Container>
      {!!icon && <Icon icon={icon} />}
      <Title>{title}</Title>
    </Container>
  )
}