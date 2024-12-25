import { View, Text, StyleSheet, StatusBar } from "react-native";

export default UserInfo = ({ user }) => {
  return (
    
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={"#999"} />

      <View style={styles.container}>
        <Text style={styles.title}>First Name: </Text>
        <Text style={styles.text}>{user.name.firstname + " " + user.name.lastname} </Text>
      </View>
      
      <View style={styles.container}>
        <Text style={styles.title}>Username: </Text>
        <Text style={styles.text}>{user.username} </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Email: </Text>
        <Text style={styles.text}>{user.email} </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Phone: </Text>
        <Text style={styles.text}>{user.phone} </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Address: </Text>
        <Text style={styles.text}>{user.address.number+', '+user.address.street+', '+user.address.city} </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flexGrow: 1,
    padding: 12
  },
  container: {
    margin: 8,
    
  },
  title:{
    fontWeight: 'bold',
    fontSize: 20
  }, 
  text: {
    fontSize: 16,
  }
});
