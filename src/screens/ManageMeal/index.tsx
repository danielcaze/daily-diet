import { TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import { ArrowLeft } from "phosphor-react-native";
import { Container, Form, Header, InOutDietContainer, InOutDietContent, SectionTitle, Title, TwoInputsContainer } from "./styles";
import { FormGroup } from '../../components/FormGroup';
import { Button } from '../../components/Button';
import { InOutDiet } from './components/InOutDiet';

export function ManageMeal() {
  return (
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
        <FormGroup label='Descrição' textarea />
        <TwoInputsContainer
          style={{
            // Workaround for calculating 50% of the div less the gap (20px)
            // So I had to get all the window size and reduce it by the div's padding (48px) & gap, then get 50%
            width: (Dimensions.get('screen').width - 48 - 20) / 2
          }}
        >
          <FormGroup label='Data' />
          <FormGroup label='Hora' />
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
  )
}