import React, { useState } from "react";
import { FlatList, View } from "react-native";
import ChatMessage from "../components/ChatMeessage";
import { chatMessages } from "../components/mockDatas/chatMessages";
import ChatInputBox from "../components/ChatInputBox";

const ChatScreen = () => {
  const [messages, setMessages] = useState(chatMessages);
  const [myId, setMyId] = useState(1);

  return (
    <View
      style={{
        backgroundColor: "#EEE",
        width: "100%",
        height: "100%"
      }}
    >
      <View
        style={{
          width: "100%",
          height: 640
        }}
      >
        <FlatList
          data={messages}
          renderItem={({ item }) => <ChatMessage myId={myId} message={item} />}
          inverted
        />
      </View>

      <ChatInputBox chatRoomID={null} />
    </View>
  );
};

export default ChatScreen;
