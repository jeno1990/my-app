import { StyleSheet, Image, View, ScrollView, Text } from "react-native";

import Spacer from "../../components/themeComponents/Spacer";
import ThemedText from "../../components/themeComponents/ThemedText";
import ThemedView from "../../components/themeComponents/ThemedView";
import ThemedCard from "../../components/themeComponents/ThemedCard";
import { Link, useRouter } from "expo-router";
import { chats } from "../../constants/dummy_data";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const Messages = () => {
  const router = useRouter();
  const [chatList, setChatList] = useState(chats);
  useEffect(() => {
    setChatList(chats);
  }, []);
  return (
    <ThemedView style={styles.container} safe={true}>
      <Spacer height={10} />
      <ThemedText title={true} style={styles.heading}>
        Recent Chat List
      </ThemedText>
      <Spacer height={10} />
      <ScrollView>
        {chatList.map((chat) => (
          <Link href={"/chat"} asChild key={chat.id}>
            <ThemedCard
              onPress={() => {
                router.push("/chat");
              }}
              style={{
                margin: 1,
                flexDirection: "row",
                gap: 20,
                paddingHorizontal: 20,
                paddingVertical: 10,
                backgroundColor: "white",
                borderRadius: 10,
                shadowColor: "#000",
                height: 70,
                borderBottomWidth: 1,
                borderBottomColor: "#ccc",
              }}
            >
              <Image
                source={{
                  uri: chat.image,
                }}
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "red",
                  borderRadius: 25,
                }}
              />
              <View style={{ flex: 1 }}>
                <ThemedText style={{ fontWeight: "bold", fontSize: 16 }}>
                  {chat.name}
                </ThemedText>
                <ThemedText
                  style={{
                    fontSize: 14,
                    color: "gray",
                    marginTop: 5,
                    numberOfLines: 1,
                    ellipsizeMode: "tail",
                  }}
                >
                  {chat.chatHistory[chat.chatHistory.length - 1].text}
                </ThemedText>
              </View>
              {!chat.chatHistory[chat.chatHistory.length - 1]?.isMine ? (
                <View style={{ flex: 1 }} />
              ) : null}
              {!chat.chatHistory[chat.chatHistory.length - 1]?.isMine ? (
                <Text
                  style={{
                    height: 24,
                    width: 24,
                    borderRadius: 12,
                    backgroundColor: "#d96464",
                    color: "white",
                    textAlign: "center",
                    lineHeight: 26,
                    fontSize: 14,
                    fontWeight: "bold",
                    overflow: "hidden",
                  }}
                >
                  1
                </Text>
              ) : null}
            </ThemedCard>
          </Link>
        ))}
      </ScrollView>
    </ThemedView>
  );
};
export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    // justifyContent: "center",
    // alignItems: "stretch",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 10,
  },
});
