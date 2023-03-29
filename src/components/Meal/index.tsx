import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, StatusBall, Time, Title } from "./styles";

export type Meal = TouchableOpacityProps & {
  type: string
  name: string
  time: string
  description: string
}

export function Meal({ type = 'HEALTHY', name, time, ...props }: Meal) {
  const { COLORS } = useTheme()
  return (
    <Container {...props}>
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