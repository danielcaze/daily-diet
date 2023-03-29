import { useNavigation } from "@react-navigation/native";
import { FlatList, View } from "react-native";
import { Meal } from "../../../../components/Meal";
import { Date } from "./styles";

type DailyMealsProps = {
  date: string
  meals: Meal[]
}

export function DailyMeals({ date, meals }: DailyMealsProps) {
  const navigation = useNavigation()
  return (
    <View style={{
      marginTop: 32
    }}>
      <Date>{date}</Date>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.time}
        renderItem={({ item }) => (
          <Meal
            type={item.type}
            name={item.name}
            time={item.time}
            onPress={() => navigation.navigate('MealInfo', {
              meal: {
                date,
                time: item.time,
                description: item.description,
                name: item.name,
                isInDiet: item.type === "HEALTHY"
              }
            })}
          />
        )}
      />
    </View>
  )
}