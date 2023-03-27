import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView).attrs({
  edges: ['right', 'bottom', 'left']
})`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`

export const Header = styled.View`
  position: relative;
  
  height: 132px;
  width: 100%;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILIES.BOLD};
    font-size: ${theme.FONT_SIZES.XLARGE};
  `}
`

export const Form = styled.ScrollView.attrs({
  contentContainerStyle: {
    rowGap: 24,
    flexGrow: 1,
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  showsVerticalScrollIndicator: false,
})`
  margin-top: -28px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  flex: 1;

  padding: 40px 24px;
`

export const TwoInputsContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  gap: 20px;
`

export const InOutDietContainer = styled.View`
  gap: 8px;
  width: 100%;
`

export const SectionTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILIES.BOLD};
    font-size: ${theme.FONT_SIZES.MEDIUM};
  `}
`

export const InOutDietContent = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`