import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";
import { defaultTheme } from "../theme";
import { AppRoutes } from "./app.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={defaultTheme}>
        <AppRoutes />
      </ThemeProvider>
    </NavigationContainer>
  )
}