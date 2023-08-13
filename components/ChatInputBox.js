import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
  StyleSheet
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

const ChatInputBox = props => {
  const [message, setMessage] = useState("");

  const onSendPress = async () => {};

  const onPress = () => {};

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={80}
      style={styles.keyboardView}
    >
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <Image style={styles.icon} source={require("../assets/mood.png")} />
          <TextInput
            placeholder={"Type a message"}
            style={styles.textInput}
            multiline
            value={message}
            onChangeText={setMessage}
          />
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/attachment.png")}
          />
          {!message &&
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/photo_camera.png")}
            />}
        </View>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.buttonContainer}>
            {!message
              ? <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={require("../assets/mic.png")}
                />
              : <MaterialIcons name="send" size={28} color="white" />}
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatInputBox;

const styles = StyleSheet.create({
  keyboardView: {
    width: "100%",
    position: "absolute",
    bottom: 140,
    paddingBottom: 10
  },
  container: {
    flexDirection: "row",
    margin: 10,
    alignItems: "flex-end"
  },
  mainContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 25,
    marginRight: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 45
  },
  textInput: {
    flex: 1,
    marginHorizontal: 5
  },
  icon: {
    marginHorizontal: 5
  },
  buttonContainer: {
    backgroundColor: "#38D15A",
    borderRadius: 25,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center"
  }
});
