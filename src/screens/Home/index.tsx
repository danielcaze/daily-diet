import { Image } from 'react-native'
import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';
import { Summary } from '../../components/Summary';

import { AddMealContainer, AddMealTitle, Container, HeaderContainer } from './styles';
import Logo from '../../../assets/Logo.png'

export function Home() {
  return (
    <Container>
      <HeaderContainer>
        <Image source={Logo} />
        <Avatar source={Logo} />
      </HeaderContainer>
      <Summary />
      <AddMealContainer>
        <AddMealTitle>Refeições</AddMealTitle>
        <Button title='Nova refeição' icon='plus' />
      </AddMealContainer>
    </Container>
  )
}