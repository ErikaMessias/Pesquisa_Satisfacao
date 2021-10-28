import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";

import Login from "./src/pages/Login/index";
import Survey1 from "./src/pages/Survey/survey1";
import Survey2 from "./src/pages/Survey/survey2";
import Survey3 from "./src/pages/Survey/survey3";
import Survey4 from "./src/pages/Survey/survey4";
import Survey5 from "./src/pages/Survey/survey5";
import Survey6 from "./src/pages/Survey/survey6";
import Survey7 from "./src/pages/Survey/survey7";
import Survey8 from "./src/pages/Survey/survey8";
import Survey9 from "./src/pages/Survey/survey9";
import Survey10 from "./src/pages/Survey/survey10";
import Survey11 from "./src/pages/Survey/survey11";
import Survey12 from "./src/pages/Survey/survey12";
import Survey13 from "./src/pages/Survey/survey13";

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
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
            name="Survey1"
            component={Survey1}
            options={{
              headerTintColor: "#F00",
            }}
          />

          <Stack.Screen
            name="Survey2"
            component={Survey2}
            options={{
              headerTintColor: "#F00",
            }}
          />

          <Stack.Screen
            name="Survey3"
            component={Survey3}
            options={{
              headerTintColor: "#F00",
            }}
          />

          <Stack.Screen
            name="Survey4"
            component={Survey4}
            options={{
              headerTintColor: "#F00",
            }}
          />

         <Stack.Screen
            name="Survey5"
            component={Survey5}
            options={{
              headerTintColor: "#F00",
            }}
          />

          <Stack.Screen
            name="Survey6"
            component={Survey6}
            options={{
              headerTintColor: "#F00",
            }}
          />

          <Stack.Screen
            name="Survey7"
            component={Survey7}
            options={{
              headerTintColor: "#F00",
            }}
          />

          <Stack.Screen
            name="Survey8"
            component={Survey8}
            options={{
              headerTintColor: "#F00",
            }}
          />

          <Stack.Screen
            name="Survey9"
            component={Survey9}
            options={{
              headerTintColor: "#F00",
            }}
          />

          <Stack.Screen
            name="Survey10"
            component={Survey10}
            options={{
              headerTintColor: "#F00",
            }}
          />

          <Stack.Screen
            name="Survey11"
            component={Survey11}
            options={{
              headerTintColor: "#F00",
            }}
          />

          <Stack.Screen
            name="Survey12"
            component={Survey12}
            options={{
              headerTintColor: "#F00",
            }}
          />

          <Stack.Screen
            name="Survey13"
            component={Survey13}
            options={{
              headerTintColor: "#F00",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
