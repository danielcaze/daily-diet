import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'
import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });
  return (
    <>
      <StatusBar backgroundColor="transparent" style="dark" translucent />
      {fontsLoaded && <Routes />}
    </>
  )
}