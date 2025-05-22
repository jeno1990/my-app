import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import ThemedView from "../../components/themeComponents/ThemedView";
import ThemedText from "../../components/themeComponents/ThemedText";
import { Ionicons } from "@expo/vector-icons";
import ThemedCard from "../../components/themeComponents/ThemedCard";
import { useRouter } from "expo-router";
import { chats } from "../../constants/dummy_data";

const ChatPage = () => {
  const [messages, setMessages] = useState(chats[0].chatHistory);
  const [message, setMessage] = React.useState("");
  const [chat, setChat] = useState(chats[0]);
  const router = useRouter();
  useEffect(() => {}, []);
  return (
    <ThemedView style={{ flex: 1 }} safe={true}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={5}
      >
        <ThemedCard
          style={{
            paddingTop: 25,
            flexDirection: "row",
            gap: 20,
            paddingHorizontal: 10,
            backgroundColor: "white",
            borderRadius: 10,
            shadowColor: "#000",
            height: 80,
            alignItems: "center",
          }}
        >
          <Ionicons
            name="chevron-back"
            size={20}
            color="black"
            onPress={() => router.back()}
          />
          <Image
            source={{
              uri: chat.image,
            }}
            style={{
              width: 50,
              height: 50,
              backgroundColor: "black",
              borderRadius: 25,
            }}
          />
          <View style={{ flex: 1 }}>
            <ThemedText style={{ fontWeight: "bold", fontSize: 20 }}>
              Amad Diallo
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
              Last seen 2 minutes ago
            </ThemedText>
          </View>
          <Ionicons name="call" size={20} color="black" />
          <Ionicons name="menu" size={20} color="black" />
        </ThemedCard>
        {/* <View style={{ flex: 1 }} /> */}

        <View
          style={{
            flex: 1,
            paddingHorizontal: 10,
            justifyContent: "flex-end",
            backgroundColor: "#f0f0f0",
          }}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "flex-end",
            }}
          >
            {messages.map((chat, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  justifyContent: chat.isMine ? "flex-end" : "flex-start",
                  marginVertical: 5,
                }}
              >
                <View
                  style={{
                    backgroundColor: chat.isMine ? "#d96464" : "#e4e6eb",
                    padding: 10,
                    borderRadius: 15,
                    maxWidth: "70%",
                  }}
                >
                  <ThemedText
                    style={{ color: chat.isMine ? "white" : "black" }}
                  >
                    {chat.text}
                  </ThemedText>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.bottomWrapper}>
          <View style={styles.inputField}>
            <TextInput
              onChangeText={(text) => setMessage(text)}
              value={message}
              placeholder="Type a message..."
              style={{ flex: 1, paddingVertical: 10 }}
            />
            <TouchableOpacity style={{ padding: 10 }}>
              <Text>📎</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.sendButton}
            onPress={() => {
              if (message.length > 0) {
                setMessages([...messages, { text: message, isMine: true }]);
                setMessage("");
              }
            }}
          >
            <Ionicons name="send" size={20} color="white" style={{}} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ThemedView>
  );
};

export default ChatPage;

const styles = StyleSheet.create({
  sendButton: {
    backgroundColor: "#d96464",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    paddingHorizontal: 15,
    marginRight: 10,
    height: 45,
  },
  bottomWrapper: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingRight: 10,
    paddingLeft: 5,
    borderTopWidth: 1,

    borderTopColor: "#ccc",
    alignItems: "center",
  },
});
