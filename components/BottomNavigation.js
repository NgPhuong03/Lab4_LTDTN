import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Homestack from "./Home/Homestack";
import ProfileStack from "./Profile/ProfileStack";
import CategoriesStack from "./Categories/CategoriesStack";
import Cart from "../screens/Cart";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";

const MainBottom = createBottomTabNavigator();
export default function BottomNavigation() {
  const { amountCart } = useContext(AuthContext);
  return (
    <MainBottom.Navigator
      screenOptions={{ headerShown: true, tabBarLabelStyle: { fontSize: 12 } }}
    >
      <MainBottom.Screen
        name="Home"
        component={Homestack}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <MainBottom.Screen
        name="Categories"
        component={CategoriesStack}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="th-large" size={size} color={color} />
          ),
        }}
      />
      <MainBottom.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ size, color }) => (
            <View>
              <Icon name="shopping-cart" size={size} color={color} />
              <View style={styles.soluong}>
                <Icon name="circle" size={16} color={"red"} />
                <Text style={styles.soluongText}>{amountCart}</Text>
              </View>
            </View>
          ),
        }}
      />
      <MainBottom.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
    </MainBottom.Navigator>
  );
}
const styles = StyleSheet.create({
  soluong: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: -5,
    left: 15,
  },
  soluongText: {
    position: "absolute",
    color: "#fff",
    fontSize: 13,
  },
});
