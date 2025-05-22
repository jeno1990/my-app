import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import { Button } from "../../components/screenComponents/button";
import Spacer from "../../components/themeComponents/Spacer";
import { Link, useRouter } from "expo-router";

const SignIn = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 0.2 }} />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 16,
        }}
      >
        <View style={{ gap: 20, alignItems: "center", width: "80%" }}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={styles.logoImage}
          />
          <Text style={{ fontSize: 28, fontWeight: "bold" }}>
            Sign in to your account
          </Text>
          <Spacer height={50} />

          <View style={{ width: "100%", gap: 20 }}>
            <TextInput
              placeholder="Email"
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                borderRadius: 8,
                padding: 12,
                width: "100%",
              }}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                borderRadius: 8,
                padding: 12,
                width: "100%",
              }}
            />
          </View>
          <Link href="/messages" asChild>
            <Button
              style={styles.signWithEmailButton}
              onPress={() => {
                router.push("/messages");
              }}
            >
              <Text style={{ color: "white", fontWeight: "500" }}>Sign in</Text>
            </Button>
          </Link>
        </View>
        <View style={{ flex: 1 }} />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  signWithEmailButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginBottom: 20,
    backgroundColor: "black",
    borderColor: "white",
    borderWidth: 1,
  },
  logoImage: {
    width: 70,
    height: 70,
    backgroundColor: "red",
    borderRadius: 50,
  },
});
