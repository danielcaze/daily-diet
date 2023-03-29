import { Dimensions } from "react-native";
import { Box } from "../../components/Box";
import { Highlight } from "../../components/Highlight";
import { RouteProps } from "../../types";
import { Button, Container, Header, Icon, Stats, StatsTitle, TwoBoxStats } from "./style";

export function Statistics({ navigation }: RouteProps<'Statistics'>) {
  const variation: "POSITIVE" | "NEGATIVE" = 'POSITIVE'

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <Container variation={variation}>
      <Button onPress={handleGoBack}>
        <Icon variation={variation} />
      </Button>
      <Header>
        <Highlight title="90,86%" subtitle="das refeições dentro da dieta" size="LG" />
      </Header>
      <Stats>
        <StatsTitle>Estatísticas gerais</StatsTitle>
        <Box>
          <Highlight title="22" subtitle="melhor sequência de pratos dentro da dieta" size="MD" />
        </Box>
        <Box>
          <Highlight title="109" subtitle="refeições registradas" size="MD" />
        </Box>
        <TwoBoxStats
          style={{
            // Workaround for calculating 50% of the div less the gap (12px)
            // So I had to get all the window size and reduce it by the div's padding (48px) & gap, then get 50%
            // Note: this is only needed when the width of the child is 100%
            width: (Dimensions.get('screen').width - 48 - 12) / 2
          }}
        >
          <Box variation="SUCCESS">
            <Highlight title="99" subtitle="refeições dentro da dieta" size="MD" />
          </Box>
          <Box variation="DANGER">
            <Highlight title="10" subtitle="refeições fora da dieta" size="MD" />
          </Box>
        </TwoBoxStats>
      </Stats>
    </Container>
  )
}