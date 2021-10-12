import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Task from "./src/pages/Task/"
import NewTask from "./src/pages/NewTask/"
import Details from "./src/pages/Details/"
import NewUser from "./src/pages/NewUser/"
import Login from "./src/pages/Login/"
import Cadastro from "./src/pages/Cadastro/"
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
          name="Cadastro"
          component={Cadastro}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen 
          name="NewUser"
          component={NewUser}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen 
          name="Task"
          component={Task}
          options={{
            headerLeft: null,
            headerTintColor: "#F00"
          }}
        />

        <Stack.Screen 
          name="NewTask"
          component={NewTask}
          options={{
            headerTintColor: "#F00"
          }}
        />

        <Stack.Screen 
          name="Survey"
          component={Survey}
          options={{
            headerTintColor: "#F00"
          }}
        />

        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTintColor: "#F00"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}