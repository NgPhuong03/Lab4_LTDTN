import { useContext, useEffect, useState } from "react";
import { View, StyleSheet, StatusBar, ActivityIndicator } from "react-native";
import { AuthContext } from "../AuthContext";
import CartItem from "../components/CartItem";
import axios from "axios";

export default Cart = () => {
  const [isLoading, setLoading] = useState(true);
  const [prods, setProds] = useState([]);

  const { cart } = useContext(AuthContext);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const promises = cart.products.map(({productId, quantity}) => axios.get(`https://fakestoreapi.com/products/${productId}`));
        const responses = await Promise.all(promises);
        const fetchedProducts = responses.map(response => response.data);
        
        setProds(...prods, fetchedProducts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
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

      {isLoading && <LoadingView />}

      <View>
        {prods.map((item, index) => (

          <CartItem
            item={item}
            key={index}
            quantity={cart.products[index].quantity}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
