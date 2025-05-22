// import React from "react";
// import { SafeAreaView, View, Text, Image } from "react-native";
// import { Button } from "../components/button";
// import { useNavigation } from "@react-navigation/native";

// export default function LandingScreen({ navigation }: any) {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={{ flex: 0.2 }} />
//       <View
//         style={{
//           flex: 1,
//           justifyContent: "center",
//           alignItems: "center",
//           padding: 16,
//         }}
//       >
//         <View style={{ gap: 20, alignItems: "center" }}>
//           <Image
//             source={require("../../assets/images/logo.png")}
//             style={{
//               width: 100,
//               height: 100,
//               backgroundColor: "red",
//               borderRadius: 50,
//             }}
//           />
//           <Text style={{ fontSize: 32, fontWeight: "bold" }}>
//             Modern Chat App
//           </Text>
//           <Text>Sign in to continue</Text>
//         </View>
//         <View style={{ flex: 1 }} />
//         <Button
//           onPress={() => navigation.navigate("signin")}
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "center",
//             gap: 10,
//             marginBottom: 20,
//             backgroundColor: "black",
//             borderColor: "white",
//             borderWidth: 1,
//           }}
//         >
//           <Text style={{ color: "white", fontWeight: "500" }}>
//             Sign in with Email
//           </Text>
//         </Button>
//         <Button
//           // onPress={handleSignInWithGoogle}
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "center",
//             gap: 10,
//             marginBottom: 50,
//           }}
//         >
//           <Image
//             source={require("../../assets/images/google-icon.png")}
//             style={{ width: 20, height: 20 }}
//           />
//           <Text style={{ color: "black", fontWeight: "500" }}>
//             Sign in with Google
//           </Text>
//         </Button>
//       </View>
//     </SafeAreaView>
//   );
// }
