import React, { useContext } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthContext } from "../Context/auth";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";

function RouteTabStack() {
  const Stack = createStackNavigator();
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
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

  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
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
