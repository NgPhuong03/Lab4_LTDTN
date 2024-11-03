import { View, Text, StyleSheet, Button, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default Header = ({firstname, lastname}) => {
    function capitalizeFirstLetter(string) {
        if (!string) return ''; // Kiểm tra chuỗi rỗng
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
  const avt = require("../assets/avt.jpg");
  const name = capitalizeFirstLetter(firstname) + ' ' + capitalizeFirstLetter(lastname);
  return (
    <View style={styles.container}>
      <View style={styles.avt}>
        <Image source={avt} style={{ width: 68, height: 68, borderRadius: 32 }} />
        <Text style={styles.text}>{name}</Text>
      </View>
      <Icon name="edit" size={40} /> 

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  avt: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    paddingLeft: 12,
    fontWeight: 'bold',
    fontSize: 24
  }
});
