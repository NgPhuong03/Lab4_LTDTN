import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default Header = ({ user , navigation, setUser}) => {
  function capitalizeFirstLetter(string) {
    if (!string) return ""; // Kiểm tra chuỗi rỗng
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const avt = require("../assets/avt.jpg");
  const name =
    capitalizeFirstLetter(user.name.firstname) + " " + capitalizeFirstLetter(user.name.lastname);
  return (
    <View style={styles.container}>
      <View style={styles.avt}>
        <Image
          source={avt}
          style={{ width: 68, height: 68, borderRadius: 32 }}
        />
        <Text style={styles.text}>{name}</Text>
      </View>
      <TouchableOpacity onPress={() => {navigation.navigate('EditProfile', {user: user, setUser: setUser})}}>
        <Icon name="edit" size={40} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  avt: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    paddingLeft: 12,
    fontWeight: "bold",
    fontSize: 24,
  },
});
