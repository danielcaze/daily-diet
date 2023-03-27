import { Highlight } from "../Highlight";
import { Container, Icon, Button } from "./styles";

type SummaryProps = {
  variation?: "POSITIVE" | "NEGATIVE";
  redirectTo(): void
}

export function Summary({ variation = 'POSITIVE', redirectTo }: SummaryProps) {
  return (
    <Container variation={variation}>
      <Button onPress={redirectTo}>
        <Icon variation={variation} />
      </Button>
      <Highlight title="90,86%" subtitle="das refeições dentro da dieta" size="LG" />
    </Container>
  )
}