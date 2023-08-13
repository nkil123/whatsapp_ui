import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import moment from "moment";

export default function NavigationBar({
  name = "Anna",
  lastSeen = "2023-08-14T00:40:00"
}) {
  return (
    <View style={styles.rectangleView}>
      <TouchableOpacity>
        <Image
          source={require("../assets/arrow_back.jpg")}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.profileContainer}>
        <View>
          <Image
            source={require("../assets/people.png")}
            resizeMode="cover"
            style={styles.peopleIcon1}
          />
        </View>

        <View style={styles.profileTextContainer}>
          <Text style={styles.name}>
            {name}
          </Text>
          <Text style={styles.lastSeen}>{`Last seen ${moment(lastSeen).format(
            "h:mmA"
          )}`}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.videocamParent}>
        <TouchableOpacity>
          <Image
            // style={[styles.callIcon1, styles.iconLayout]}
            // resizeMode="cover"
            source={require("../assets/videocam.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={[styles.callIcon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/call.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={[styles.callIcon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/more_vert.jpg")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rectangleView: {
    borderBottomRightRadius: 8,
    width: "100%",
    height: 72,
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center"
  },
  iconLayout: {
    height: 24,
    width: 24
  },
  callIcon1: {
    marginLeft: 16
  },
  videocamParent: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 40,
    alignContent: "center"
  },
  peopleIcon1: {
    width: 48,
    height: 48
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1c1b1f",
    textAlign: "left"
  },
  lastSeen: {
    fontSize: 12,
    color: "#9c9b9b",
    padding: 0,
    marginTop: 4,
    textAlign: "left"
  },
  profileTextContainer: {
    marginLeft: 12
  },
  peopleParent: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center"
  },
  profileContainer: {
    display: "flex",
    height: 48,
    marginLeft: 4,
    width: 200,
    flexDirection: "row"
  }
});
