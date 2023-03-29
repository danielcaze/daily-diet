import { View } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, StatusBall, Time, Title } from "./styles";

export type Meal = {
  type: 'HEALTHY' | 'JUNK'
  name: string
  time: string
}

export function Meal({ type = 'HEALTHY', name, time }: Meal) {
  const { COLORS } = useTheme()
  return (
    <Container>
      <Time>
        {time}
      </Time>
      <Title style={{
        borderLeftColor: COLORS.GRAY_400,
        borderLeftWidth: 1,
      }}>
        {name}
      </Title>
      {!!type && <StatusBall variation={type} />}
    </Container>
  )
}