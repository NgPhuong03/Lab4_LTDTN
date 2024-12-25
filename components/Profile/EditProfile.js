import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

export default EditProfile = ({ route, navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            HanldeConfirmPressed();
          }}
        >
          <Icon
            name="check"
            size={28}
            color={"black"}
            style={{ paddingHorizontal: 20 }}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const HanldeConfirmPressed = () => {
    setUser(data);
    navigation.pop();
  };

  const { user, setUser } = route.params;
  var data = { ...user };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#999"} />

      {/* Name */}
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <View style={{ flexGrow: 3 / 2, margin: 4 }}>
          <Text style={styles.title}>First Name</Text>
          <TextInput
            defaultValue={data.name.firstname}
            onChangeText={(e) => (data.name.firstname = e)}
            style={styles.textInput}
          />
        </View>

        <View style={{ flexGrow: 1, margin: 4 }}>
          <Text style={styles.title}>Last Name</Text>
          <TextInput
            defaultValue={data.name.lastname}
            onChangeText={(e) => (data.name.lastname = e)}
            style={styles.textInput}
          />
        </View>
      </View>

      {/* Username */}
      <View style={{ flexGrow: 1, margin: 4 }}>
        <Text style={styles.title}>Username</Text>
        <TextInput
          defaultValue={data.username}
          onChangeText={(e) => (data.username = e)}
          style={styles.textInput}
        />
      </View>

      {/* Email */}
      <View style={{ flexGrow: 1, margin: 4 }}>
        <Text style={styles.title}>Email</Text>
        <TextInput
          defaultValue={data.email}
          onChangeText={(e) => (data.email = e)}
          style={styles.textInput}
        />
      </View>

      {/* Phone Number */}
      <View style={{ flexGrow: 1, margin: 4 }}>
        <Text style={styles.title}>Phone Number</Text>
        <TextInput
          defaultValue={data.phone}
          onChangeText={(e) => (data.phone = e)}
          style={styles.textInput}
        />
      </View>

      {/* House Number */}
      <View style={{ flexGrow: 1, margin: 4 }}>
        <Text style={styles.title}>House Number</Text>
        <TextInput
          defaultValue={data.address.number.toString()}
          onChangeText={(e) => (data.address.number = parseInt(e, 10))}
          style={styles.textInput}
        />
      </View>

      {/* Street */}
      <View style={{ flexGrow: 1, margin: 4 }}>
        <Text style={styles.title}>Street</Text>
        <TextInput
          defaultValue={data.address.street}
          onChangeText={(e) => (data.address.street = e)}
          style={styles.textInput}
        />
      </View>

      {/* City */}
      <View style={{ flexGrow: 1, margin: 4 }}>
        <Text style={styles.title}>City</Text>
        <TextInput
          defaultValue={data.address.city}
          onChangeText={(e) => (data.address.city = e)}
          style={styles.textInput}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 4,
    paddingLeft: 8,
    alignItems: "center",
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
