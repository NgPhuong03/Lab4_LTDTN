import { TouchableOpacity } from "react-native";
import {  Text, StyleSheet, Image } from "react-native";

export default function RenderItem ({ title, selected, set }) {
  var img,
    isSelected = false;
  switch (title) {
    case "men's clothing":
      img = require("../../assets/icon/men.png");
      break;
    case "women's clothing":
      img = require("../../assets/icon/women.png");
      break;
    case "jewelery":
      img = require("../../assets/icon/jewelery.png");
      break;
    case "electronics":
      img = require("../../assets/icon/electronics.png");
      break;
    default:
      img = require("../../assets/icon/all.png");
      break;
  }

  if (title == selected) {
    isSelected = true;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={() => {set(title)}}>
      <Image source={img} style={{ width: 44, height: 44 }} />
      <Text style={isSelected ? styles.selected : styles.unSelected}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
    paddingVertical: 8
  },
  selected: {
    fontSize: 16,
    textDecorationLine: 'underline',
    color: '#3366FF'
  },
  unSelected: {
    fontSize: 16,
  }
});
