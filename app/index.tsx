import React from "react";
import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";
import { Button } from "../components/screenComponents/button";
import { Link, useRouter } from "expo-router";

export default function LandingScreen() {
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
        <View style={{ gap: 20, alignItems: "center" }}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logoImage}
          />
          <Text style={{ fontSize: 32, fontWeight: "bold" }}>
            Messanger App
          </Text>
          <Text>Sign in to continue</Text>
        </View>
        <View style={{ flex: 1 }} />
        <Link href="/signin" asChild>
          <Button
            onPress={() => router.push("/signin")}
            disabled={false}
            style={styles.signWithEmailButton}
          >
            <Text style={{ color: "white", fontWeight: "500" }}>
              Sign in with Email
            </Text>
          </Button>
        </Link>
        <Button
          // onPress={handleSignInWithGoogle}
          style={styles.signWithGoogleButton}
        >
          <Image
            source={require("../assets/images/google-icon.png")}
            style={{ width: 20, height: 20 }}
          />
          <Text style={{ color: "black", fontWeight: "500" }}>
            Sign in with Google
          </Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logoImage: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    borderRadius: 50,
  },
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
  signWithGoogleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginBottom: 50,
  },
});
