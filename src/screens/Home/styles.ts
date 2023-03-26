import { SafeAreaView } from 'react-native-safe-area-context';
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  padding: 24px;
  flex: 1;
`

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const AddMealContainer = styled.View`
  margin-top: 40px;
`

export const AddMealTitle = styled.Text`
  margin-bottom: 8px;
`