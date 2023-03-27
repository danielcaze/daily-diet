import { Container } from "./styles"

type BoxProps = {
  variation?: 'PRIMARY' | 'SUCCESS' | 'DANGER'
  children: React.ReactNode
}

export function Box({ variation = "PRIMARY", children }: BoxProps) {
  return (
    <Container
      variation={variation}
    >
      {children}
    </Container>
  )
}