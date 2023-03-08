import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Login } from "../screens/Login";
import { Register } from "../screens/Register";

function RouteTabStack() {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
}

export function Routes() {
  return (
    <>
      <NavigationContainer>
        <RouteTabStack />
      </NavigationContainer>
    </>
  );
}
