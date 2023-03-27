export type RoutesParamList = {
  Home: undefined
  Statistics: undefined
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RoutesParamList { }
  }
}