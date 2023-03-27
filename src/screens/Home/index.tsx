import { FlatList, Image } from 'react-native'
import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';
import { Summary } from '../../components/Summary';

import { AddMealContainer, AddMealTitle, Container, HeaderContainer } from './styles';
import Logo from '../../../assets/Logo.png'
import { DailyMeals } from './components/DailyMeals';
import { RouteProps } from '../../types';

const DAILY_MEALS = [
  {
    date: '12.08.22',
    meals: [
      { type: 'HEALTHY', name: 'X-Tudo', time: '20:01' },
      { type: 'HEALTHY', name: 'X-Tudo', time: '20:02' },
      { type: 'HEALTHY', name: 'X-Tudo', time: '20:03' },
      { type: 'HEALTHY', name: 'X-Tudo', time: '20:04' },
    ]
  },
  {
    date: '11.08.22',
    meals: [
      { type: 'JUNK', name: 'X-Tudo', time: '20:05' },
      { type: 'JUNK', name: 'X-Tudo', time: '20:06' },
    ]
  }
]

export function Home({ navigation }: RouteProps<'Home'>) {
  return (
    <Container>
      <HeaderContainer>
        <Image source={Logo} />
        <Avatar source={{ uri: 'https://github.com/danielcaze.png' }} />
      </HeaderContainer>
      <Summary redirectTo={() => navigation.navigate('Statistics')} />
      <AddMealContainer>
        <AddMealTitle>Refeições</AddMealTitle>
        <Button title='Nova refeição' icon='plus' />
      </AddMealContainer>
      <FlatList
        data={DAILY_MEALS}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => (
          <DailyMeals date={item.date} meals={item.meals} />
        )}
      />
    </Container>
  )
}