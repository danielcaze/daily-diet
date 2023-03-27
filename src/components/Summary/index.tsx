import { Highlight } from "../Highlight";
import { Container, Icon, Subtitle, Title, Button } from "./styles";

type SummaryProps = {
  variant?: "POSITIVE" | "NEGATIVE";
  redirectTo(): void
}

export function Summary({ variant = 'POSITIVE', redirectTo }: SummaryProps) {
  return (
    <Container variant={variant}>
      <Button onPress={redirectTo}>
        <Icon variant={variant} />
      </Button>
      <Highlight title="90,86%" subtitle="das refeições dentro da dieta" size="LG" />
    </Container>
  )
}