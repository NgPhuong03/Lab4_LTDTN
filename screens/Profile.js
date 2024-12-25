import { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { AuthContext } from "../AuthContext";
import axios from "axios";
import { TouchableOpacity } from "react-native";
import Header from "../components/Profile/Header";
import UserInfo from "../components/Profile/UserInfo";

export default Profile = ({ navigation }) => {
  const [user, setUser] = useState();
  const { LogOut, decode } = useContext(AuthContext);

  const handlerSetUser = (e) => {
    setUser(e);
  };

  useEffect(() => {
    console.log(decode.sub);
    const fetchUserInfo = async () => {
      await axios
        .get("https://fakestoreapi.com/users/" + decode.sub)
        .then(function (response) {
          const data = response.data;
          setUser(data);

          if (user) {
            console.log("Get user success");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    fetchUserInfo();
  }, []);

  const LoadingView = () => {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#006633" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#999"} />

      {user ? (
        <View>
          <Header
            user={user}
            navigation={navigation}
            setUser={handlerSetUser}
          />
          <UserInfo user={user} />
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.logoutBtn} onPress={LogOut}>
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
              >
                LOG OUT
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <LoadingView />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  logoutBtn: {
    width: "90%",
    height: 36,
    backgroundColor: "#0099FF",
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
