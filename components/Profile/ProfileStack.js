import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../../screens/Profile";
import EditProfile from "./EditProfile";
const Stack = createStackNavigator();

export default ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScr"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
      />
    </Stack.Navigator>
  );
};
