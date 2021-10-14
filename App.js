import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./src/pages/Login/"
import Survey from "./src/pages/Survey/"


const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen 
          name="Survey"
          component={Survey}
          options={{
            headerTintColor: "#F00"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}