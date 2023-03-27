import { TextInputProps } from 'react-native/types'
import { Container, DateTimeButton, DateTimePickerText, Input, Label } from "./styles";

type FormGroupProps = TextInputProps & {
  label?: string
  textArea?: boolean
  datePicker?: {
    value: string
    onPress(): void
  }
}

export function FormGroup({ label, textArea = false, datePicker, ...props }: FormGroupProps) {
  return (
    <Container>
      {!!label && <Label>{label}</Label>}
      {
        datePicker ? (
          <DateTimeButton onPress={datePicker.onPress} >
            <DateTimePickerText>{datePicker.value}</DateTimePickerText>
          </DateTimeButton>
        ) : (
          <Input
            textAlignVertical={textArea ? 'top' : 'center'}
            multiline={textArea}
            numberOfLines={textArea ? 5 : 1}
            {...props}
          />
        )
      }
    </Container>
  )
}