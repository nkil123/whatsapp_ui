import moment from "moment/moment";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ChatMessage = props => {
  const { message, myId } = props;

  const isMyMessage = () => {
    return message?.user?.id === myId;
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.messageBox,
          {
            backgroundColor: isMyMessage() ? "#DCF8C5" : "white",
            marginLeft: isMyMessage() ? 130 : 0,
            marginRight: isMyMessage() ? 0 : 70
          }
        ]}
      >
        <Text style={styles.message}>
          {message?.content}
        </Text>
        <Text style={styles.time}>
          {moment(message?.createdAt).format('h:mmA')}
        </Text>
      </View>
    </View>
  );
};

export default ChatMessage;
const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  messageBox: {
    borderRadius: 10,
    padding: 10,
    maxWidth:280
  },
 
  message: {
    textAlign:'left',
    width:'auto'
  },
  time: {
    alignSelf: "flex-end",
    color: "grey",
    fontSize:12
  }
});
