import styled from "styled-components/native";

type ContainerProps = {
  variation: 'PRIMARY' | 'SUCCESS' | 'DANGER'
}

export const Container = styled.View<ContainerProps>`
  align-self: stretch;
  justify-self: stretch;
  width: 100%;
  padding: 16px;
  gap: 8px;

  border-radius: 8px;

  background-color: ${({ variation, theme }) => (
    variation === 'PRIMARY' ?
      theme.COLORS.GRAY_200 :
      variation === 'SUCCESS' ?
        theme.COLORS.LIGHT_GREEN :
        theme.COLORS.LIGHT_RED
  )};
`