export type RoutesParamList = {
  Home: undefined
  Statistics: undefined
  ManageMeal: {
    isEdition?: boolean
  } | undefined
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RoutesParamList { }
  }
}