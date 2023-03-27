import { TextInputProps } from 'react-native/types'
import { Container, Input, Label } from "./styles";

type FormGroupProps = TextInputProps & {
  label?: string
  textarea?: boolean
}

export function FormGroup({ label, textarea = false, ...props }: FormGroupProps) {
  return (
    <Container>
      {!!label && <Label>{label}</Label>}
      <Input
        textAlignVertical={textarea ? 'top' : 'center'}
        multiline={textarea}
        numberOfLines={textarea ? 5 : 1}
        {...props}
      />
    </Container>
  )
}