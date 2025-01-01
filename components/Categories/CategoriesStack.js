import { createStackNavigator } from "@react-navigation/stack";
import ProductDetail from '../ProductDetail';
import React from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Categories from "../../screens/Categories";

const Stack = createStackNavigator();

export default function CategoriesStack ({navigation, route})  {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "CateDetail"){
        navigation.setOptions({headerShown: false});
    }else {
        navigation.setOptions({headerShown: true});
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cate"
        component={Categories}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CateDetail"
        component={ProductDetail}
      />
    </Stack.Navigator>
  );
};
