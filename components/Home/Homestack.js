import { createStackNavigator } from "@react-navigation/stack";
import ProductDetail from '../ProductDetail';
import Home from '../../screens/Home';
import React from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Stack = createStackNavigator();

export default Homestack = ({navigation, route}) => {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "HomeDetail"){
        navigation.setOptions({headerShown: false});
    }else {
        navigation.setOptions({headerShown: true});
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HomeDetail"
        component={ProductDetail}
      />
    </Stack.Navigator>
  );
};
