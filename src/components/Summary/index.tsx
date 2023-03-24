import { Container, Icon, Subtitle, Title, Button } from "./styles";

type SummaryProps = {
  variant?: "PRIMARY" | "SECONDARY";
}

export function Summary({ variant = 'PRIMARY' }: SummaryProps) {
  return (
    <Container variant={variant}>
      <Button>
        <Icon variant={variant} />
      </Button>
      <Title>90,86%</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  )
}