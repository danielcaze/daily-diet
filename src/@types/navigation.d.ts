import { NewMealDTO } from "../types"

export type RoutesParamList = {
  Home: undefined
  Statistics: undefined
  ManageMeal: {
    isEdition?: boolean
  } | undefined
  MealInfo: {
    meal?: NewMealDTO
  } | undefined
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RoutesParamList { }
  }
}