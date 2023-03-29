import { Fragment, useEffect } from 'react'
import { TouchableOpacity, Dimensions, Platform, View, Image } from 'react-native'
import { ArrowLeft } from "phosphor-react-native";
import { Container, FeedbackSubtitle, FeedbackSubtitleStrong, FeedbackTitle, Form, Header, InOutDietContainer, InOutDietContent, SectionTitle, Title, TwoInputsContainer } from "./styles";
import { FormGroup } from '../../components/FormGroup';
import { Button } from '../../components/Button';
import { InOutDiet } from './components/InOutDiet';
import { useState } from 'react';
import RNDateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { SafeAreaView } from 'react-native-safe-area-context';
import IsInDietFeedbackImage from '../../../assets/InDietFeedback.png'
import IsOutDietFeedbackImage from '../../../assets/OutDietFeedback.png'
import { NewMealDTO, RouteProps } from '../../types';
import { useRoute } from '@react-navigation/native';

type Params = {
  meal: NewMealDTO
}

export function ManageMeal({ navigation }: RouteProps<'ManageMeal'>) {

  const [showFeedbackScreen, setShowFeedbackScreen] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [isInDiet, setIsInDiet] = useState<boolean | undefined>(undefined)
  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState<'date' | 'time'>('date')
  const [show, setShow] = useState(false)
  const [dateText, setDateText] = useState('')
  const [timeText, setTimeText] = useState('')

  const route = useRoute()
  const params = route.params as Params

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

  async function handleCreateNewMeal() {
    const NewMealDTO: NewMealDTO = {
      name,
      description,
      date: dateText,
      time: timeText,
      isInDiet
    }
    setShowFeedbackScreen(true)
    console.log(NewMealDTO)
  }

  function goHome() {
    navigation.popToTop()
  }

  function FeedbackScreen() {
    const title = isInDiet ? 'Continue assim!' : 'Que pena!'
    const subtitle = isInDiet ? [
      {
        text: 'Você continua',
        type: 'regular'
      },
      {
        text: 'dentro da dieta.',
        type: 'bold'
      },
      {
        text: 'Muito bem!',
        type: 'regular'
      }
    ] : [
      {
        text: 'Você',
        type: 'regular'
      },
      {
        text: 'saiu da dieta',
        type: 'bold'
      },
      {
        text: 'dessa vez, mas continue se esforçando e não desista!',
        type: 'regular'
      }
    ]
    const imageSrc = isInDiet ? IsInDietFeedbackImage : IsOutDietFeedbackImage
    return (
      <SafeAreaView
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          gap: 40
        }}
      >
        <View
          style={{
            alignItems: 'center',
            gap: 8
          }}
        >
          <FeedbackTitle isInDiet={isInDiet}>{title}</FeedbackTitle>
          <FeedbackSubtitle>{subtitle.map(text => text.type === 'bold' ? (
            <>
              <FeedbackSubtitleStrong key={text.text}>{text.text}</FeedbackSubtitleStrong>{' '}
            </>
          ) : (
            <Fragment key={text.text}>
              {text.text}{' '}
            </Fragment>
          ))}</FeedbackSubtitle>
        </View>
        <Image source={imageSrc} />
        <Button
          title='Ir paga a página inicial'
          style={{
            maxWidth: '51%'
          }}
          onPress={goHome}
        />
      </SafeAreaView>
    )
  }

  useEffect(() => {
    if (params?.meal) {
      setName(params.meal.name)
      setDescription(params.meal.description)
      setIsInDiet(params.meal.isInDiet)
      setDateText(params.meal.date)
      setTimeText(params.meal.time)
      setDate(new Date(params.meal.date))
    }
  }, [params])

  return !showFeedbackScreen ? (
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
            onPress={() => navigation.goBack()}
          >
            <ArrowLeft size={24} />
          </TouchableOpacity>
          <Title>{params?.meal ? 'Editar' : 'Nova'} refeição</Title>
        </Header>
        <Form>
          <FormGroup
            label='Nome'
            onChangeText={setName}
            value={name}
          />
          <FormGroup
            label='Descrição'
            textArea
            onChangeText={setDescription}
            value={description}
          />
          <TwoInputsContainer
            style={{
              // Workaround for calculating 50% of the div less the gap (20px)
              // So I had to get all the window size and reduce it by the div's padding (48px) & gap, then get 50%
              // Note: this is only needed when the width of the child is 100%
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
                // Note: this is only needed when the width of the child is 100%
                width: (Dimensions.get('screen').width - 48 - 8) / 2
              }}
            >
              <InOutDiet isInDiet={true} checked={isInDiet === true} onPress={() => setIsInDiet(true)} />
              <InOutDiet isInDiet={false} checked={isInDiet === false} onPress={() => setIsInDiet(false)} />
            </InOutDietContent>
          </InOutDietContainer>
          <Button
            title={params?.meal ? 'Salvar alterações' : 'Cadastrar refeição'}
            style={{
              // Margin auto makes the button go up when keyboard is open while not on ScrollView
              marginTop: 'auto'
            }}
            onPress={handleCreateNewMeal}
          />
        </Form>
      </Container>
    </>
  ) : (
    <FeedbackScreen />
  )
}