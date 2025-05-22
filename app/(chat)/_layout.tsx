import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const ChatLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="chat" options={{ title: "Chat" }} />
    </Stack>
  );
};

export default ChatLayout;

const styles = StyleSheet.create({});
