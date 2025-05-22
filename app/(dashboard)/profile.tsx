import { StyleSheet, Image, Text, View } from "react-native";

import Spacer from "../../components/themeComponents/Spacer";
import ThemedText from "../../components/themeComponents/ThemedText";
import ThemedView from "../../components/themeComponents/ThemedView";
import ThemedCard from "../../components/themeComponents/ThemedCard";
import { Ionicons } from "@expo/vector-icons";

const Profile = () => {
  return (
    <ThemedView style={styles.container} safe={true}>
      <Spacer height={90} />
      <Image
        source={{
          uri: "https://media.cnn.com/api/v1/images/stellar/prod/200803125415-bruno-fernandes-3.jpg?q=w_4000,h_2667,x_0,y_0,c_fill",
        }}
        style={styles.logoImage}
      />
      <Spacer height={20} />
      <ThemedText title={true} style={styles.heading}>
        Bruno Fernandes
      </ThemedText>
      <Text>bruno@fernandes.com</Text>
      <Spacer />
      {/* Notifications */}
      <ThemedCard style={styles.cardStyle}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Ionicons name="notifications" size={20} color="black" />
          <ThemedText style={styles.heading2}>Notifications</ThemedText>
        </View>
        <Ionicons name="chevron-forward" size={20} color="black" />
      </ThemedCard>
      <Spacer height={10} />
      {/* logout */}
      <ThemedCard style={styles.cardStyle}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Ionicons name="log-out" size={20} color="black" />
          <ThemedText style={styles.heading2}>Logout</ThemedText>
        </View>
        <Ionicons name="chevron-forward" size={20} color="black" />
      </ThemedCard>
    </ThemedView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  heading2: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  logoImage: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    borderRadius: 50,
  },
  cardStyle: {
    width: "90%",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
});
