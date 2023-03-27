import { TouchableOpacity, Dimensions, Platform } from 'react-native'
import { ArrowLeft } from "phosphor-react-native";
import { Container, Form, Header, InOutDietContainer, InOutDietContent, SectionTitle, Title, TwoInputsContainer } from "./styles";
import { FormGroup } from '../../components/FormGroup';
import { Button } from '../../components/Button';
import { InOutDiet } from './components/InOutDiet';
import { useState } from 'react';
import RNDateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

export function ManageMeal() {
  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState<'date' | 'time'>('date')
  const [show, setShow] = useState(false)
  const [dateText, setDateText] = useState('')
  const [timeText, setTimeText] = useState('')

  function onChangeDateTime(event: DateTimePickerEvent, selectedDate: Date | undefined) {
    const currentDate = selectedDate || date
    setShow(Platform.OS === 'ios')
    setDate(currentDate)

    let tempDate = new Date(currentDate);
    let fDate = `${tempDate.getDate()}/${tempDate.getMonth() + 1}/${tempDate.getFullYear()}`
    setDateText(fDate)
    let fTime = `${tempDate.getHours()}:${tempDate.getMinutes()}`
    setTimeText(fTime)
  }

  function showDateTimePicker(currentMode: 'date' | 'time') {
    return () => {
      setShow(true)
      setMode(currentMode)
    }
  }

  return (
    <>
      {
        show &&
        <RNDateTimePicker
          testID='dateTimePicker'
          maximumDate={new Date()}
          display='default'
          is24Hour
          value={date}
          mode={mode}
          onChange={onChangeDateTime}
        />
      }
      <Container>
        <Header>
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 55,
              left: 24,
            }}
          >
            <ArrowLeft size={24} />
          </TouchableOpacity>
          <Title>Nova refeição</Title>
        </Header>
        <Form>
          <FormGroup label='Nome' />
          <FormGroup label='Descrição' textArea />
          <TwoInputsContainer
            style={{
              // Workaround for calculating 50% of the div less the gap (20px)
              // So I had to get all the window size and reduce it by the div's padding (48px) & gap, then get 50%
              width: (Dimensions.get('screen').width - 48 - 20) / 2
            }}
          >
            <FormGroup label='Data' datePicker={{
              value: dateText,
              onPress: showDateTimePicker('date')
            }}
            />
            <FormGroup label='Hora' datePicker={{
              value: timeText,
              onPress: showDateTimePicker('time')
            }}
            />
          </TwoInputsContainer>
          <InOutDietContainer>
            <SectionTitle>Está dentro da dieta?</SectionTitle>
            <InOutDietContent
              style={{
                // Workaround for calculating 50% of the div less the gap (8px)
                // So I had to get all the window size and reduce it by the div's padding (48px) & gap, then get 50%
                width: (Dimensions.get('screen').width - 48 - 8) / 2
              }}
            >
              <InOutDiet isInDiet={true} />
              <InOutDiet isInDiet={false} />
            </InOutDietContent>
          </InOutDietContainer>
          <Button
            title='Cadastrar refeição'
            style={{
              // Margin auto makes the button go up when keyboard is open while not on ScrollView
              marginTop: 'auto'
            }}
          />
        </Form>
      </Container>
    </>
  )
}