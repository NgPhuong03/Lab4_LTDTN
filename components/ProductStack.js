import { createStackNavigator } from "@react-navigation/stack";
import ProductDetail from '../ProductDetail';
import Product from "./Product";

const Stack = createStackNavigator();

export default ProductStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="prod"
        component={Product}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={ProductDetail}
      />
    </Stack.Navigator>
  );
};
