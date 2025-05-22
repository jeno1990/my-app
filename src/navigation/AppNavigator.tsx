import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "../screens/landingScreen";
import SignInScreen from "../screens/SignInScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="landingPage"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="landingPage" component={LandingScreen} />
      <Stack.Screen name="signin" component={SignInScreen} />
    </Stack.Navigator>
  );
}
