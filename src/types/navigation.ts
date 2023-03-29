import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RoutesParamList } from "../@types/navigation"

type routesNames = keyof RoutesParamList

export type RouteProps<T extends routesNames> = {
  navigation: NativeStackNavigationProp<RoutesParamList, T>
}