import { useState } from 'react'
import { useRoute } from '@react-navigation/native';
import { ArrowLeft } from 'phosphor-react-native';
import { Modal, TouchableOpacity, View } from 'react-native'
import { Button } from '../../components/Button';
import { NewMealDTO, RouteProps } from "../../types";
import { Container, Form, Header, Title, Ball, DateTime, DietStatus, DietStatusText, MealName, Paragraph } from "./styles";
import { ModalMealDeletion } from '../../components/ModalMealDeletion';

type Params = {
  meal?: NewMealDTO
}

export function MealInfo({ navigation }: RouteProps<'MealInfo'>) {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const route = useRoute()
  const param = route.params as Params

  function toggleModal(value: boolean) {
    setIsModalOpen(value)
  }

  function handleDeleteMeal() {
    navigation.popToTop()
  }

  function handleEditMeal() {
    navigation.navigate('ManageMeal', {
      meal: param.meal
    })
  }

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalOpen}
      >
        <ModalMealDeletion deleteItem={handleDeleteMeal} toggleModal={toggleModal} />
      </Modal>
      <Container isInDiet={!!param.meal?.isInDiet}>
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
          <Title>Refeição</Title>
        </Header>
        <Form>
          <View
            style={{ gap: 24 }}
          >
            <View
              style={{ gap: 8 }}
            >
              <MealName>{param.meal?.name}</MealName>
              <Paragraph>{param.meal?.description}</Paragraph>
            </View>
            <View
              style={{ gap: 8 }}
            >
              <DateTime>Data e hora</DateTime>
              <Paragraph>
                {param.meal?.date} às {param.meal?.time}
              </Paragraph>
            </View>
            <DietStatus>
              <Ball isInDiet={!!param.meal?.isInDiet} />
              <DietStatusText>
                {param.meal?.isInDiet ? 'dentro ' : 'fora '}
                da dieta
              </DietStatusText>
            </DietStatus>
          </View>
          <View
            style={{ gap: 9 }}
          >
            <Button title="Editar refeição" icon='edit' onPress={handleEditMeal} />
            <Button title="Excluir refeição" icon='delete' variation='SECONDARY' onPress={() => toggleModal(true)} />
          </View>
        </Form>
      </Container>
    </>
  )
}