import { ComponentProps } from 'react'
import { Container } from "./styles"

type BoxProps = ComponentProps<typeof Container> & {
  variation?: 'PRIMARY' | 'SUCCESS' | 'DANGER'
  children: React.ReactNode
}

export function Box({ variation = "PRIMARY", children, ...props }: BoxProps) {
  return (
    <Container
      variation={variation}
      {...props}
    >
      {children}
    </Container>
  )
}