import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Container, Dot, Title } from "./styles";

type InOutDietProps = TouchableOpacityProps & {
  isInDiet: boolean
  checked?: boolean
}

export function InOutDiet({ isInDiet, checked = false, ...props }: InOutDietProps) {
  const title = isInDiet ? 'Sim' : 'Não'
  const variation = isInDiet ? 'IN' : 'OUT'
  return (
    <Container
      variation={variation}
      checked={checked}
      as={TouchableOpacity}
      {...props}
    >
      <Dot variation={variation} />
      <Title>{title}</Title>
    </Container >
  )
}