import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "../screens/Home";
import { ManageMeal } from "../screens/ManageMeal";
import { Statistics } from "../screens/Statistics";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Statistics" component={Statistics} />
      <Stack.Screen name="ManageMeal" component={ManageMeal} />
    </Stack.Navigator>
  )
}