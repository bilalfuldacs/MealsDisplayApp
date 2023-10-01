import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CategoryScree from './screens/CategoryScree';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverView from './screens/MealsOverView';
import MealsDetailScreen from './screens/MealsDetailScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light"/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:"#351401"},headerTintColor:'white',contentStyle:{
            backgroundColor:"#b0a59f"
          }}}>
          <Stack.Screen name="MealsCategory" component={CategoryScree} options={{title:"All Categories"}}/>
         < Stack.Screen name="MealsDetailScreen" component={MealsDetailScreen} options={{title:"One Categories" }}/>
          <Stack.Screen name="MealsOverview" component={MealsOverView} />
      </Stack.Navigator>

      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

