import { TouchableOpacity } from 'react-native'
import { Container, Dot, Title } from "./styles";

type InOutDietProps = {
  isInDiet: boolean
  checked?: boolean
}

export function InOutDiet({ isInDiet, checked = false }: InOutDietProps) {
  const title = isInDiet ? 'Sim' : 'Não'
  const variation = isInDiet ? 'IN' : 'OUT'
  return (

    <Container variation={variation} checked={checked} as={TouchableOpacity}>
      <Dot variation={variation} />
      <Title>{title}</Title>
    </Container >

  )
}