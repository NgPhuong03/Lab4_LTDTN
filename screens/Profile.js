import { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { AuthContext } from "../AuthContext";
import axios from "axios";
import { TouchableOpacity } from "react-native";
import Header from "../components/Header";

export default Profile = () => {
  const [user, setUser] = useState([]);
  const { LogOut, decode, setLoading , isLoading} = useContext(AuthContext);

  useEffect(() => {
    const fetchUserInfo = async () => {
      await axios
         .get("https://fakestoreapi.com/users/" + decode.sub) 
         .then(function (response) {
           setUser(response.data);
           if (user) {
            console.log('Get user success');
           }
           
         })
         .catch(function (error) {
           console.log(error);
         });
   }

    fetchUserInfo();
}, []);
  
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={'#999'}/>
      <Header firstname={user.name.firstname} lastname={user.name.lastname}/>
      <Text>First Name: {user.name.firstname}</Text>
      <View style={styles.logoutBtn}>
        <TouchableOpacity style={styles.logoutBtn} onPress={LogOut}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            LOG OUT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  logoutBtn: {
    width: "90%",
    height: 36,
    backgroundColor: "#0099FF",
    justifyContent: "center",
    alignItems: "center",
  },
});
