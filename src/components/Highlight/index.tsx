import { Container, Subtitle, Title } from "./styles"

type HighlightProps = {
  title: string,
  subtitle: string,
  size?: 'MD' | 'LG'
}

export function Highlight({ title, subtitle, size = 'MD' }: HighlightProps) {
  return (
    <Container size={size}>
      <Title size={size}>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}