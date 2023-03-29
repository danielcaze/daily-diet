import { View, Dimensions } from 'react-native'
import { Button } from '../Button';
import { Background, Container, Title } from "./styles";

type ModalMealDeletionProps = {
  deleteItem(param?: any): void
  toggleModal(value: boolean): void
}

export function ModalMealDeletion({ toggleModal, deleteItem }: ModalMealDeletionProps) {

  function handleMealDeletion() {
    toggleModal(false)
    deleteItem()
  }

  return (
    <Background>
      <Container>
        <Title>Deseja realmente excluir o registro da refeição?</Title>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
            // Workaround for calculating 50% of the div less the gap (12px)
            // So I had to get all the window size and reduce it by the div's padding (24px) + margin (24px) & gap, then get 50% of it
            // Note: this is only needed when the width of the child is 100%
            width: (Dimensions.get('screen').width - 96 - 12) / 2
          }}
        >
          <Button title="Cancelar" style={{ alignSelf: 'flex-start' }} variation="SECONDARY" onPress={() => toggleModal(false)} />
          <Button title="Sim, excluir" onPress={handleMealDeletion} />
        </View>
      </Container>
    </Background>
  )
}