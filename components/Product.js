import { useContext } from "react";
import { Alert, TouchableOpacity } from "react-native";
import {
  useWindowDimensions,
  View,
  Image,
  StyleSheet,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { AuthContext } from "../AuthContext";
export default function Product({ item, onPress }) {
  const { setAmount, cartProd, setCartProd, amountCart, cart, user } =
    useContext(AuthContext);
  const { width } = useWindowDimensions();
  const edge = width * 0.45;

  // Function

  const handleAddtoCart = async () => {
    console.log("add pressed", item.id);
    let prod = {
      productId: item.id,
      quantity: 1,
    };

    if (!cartProd.find((x) => x.productId === item.id)) {
      setCartProd([...cartProd, prod]);
      setAmount(amountCart + 1);
      let now = new Date();
      await fetch(`https://fakestoreapi.com/carts/${cart.id}`, {
        method: "PUT",
        body: JSON.stringify({
          userId: user.id,
          date: now,
          products: cartProd,
        }),
      })
        .then((res) => res.json())
        .then((json) => console.log(json));
      
      
    } else {
      Alert.alert("Message", "This product is already in your cart.");
    }
  };

  return (
    <TouchableOpacity
      style={[{ width: edge, height: edge + (edge * 2) / 4 }, styles.container]}
      onPress={() => onPress(item.id)}
    >
      <Image
        source={{ uri: item.image }}
        style={{
          width: edge - 12,
          height: edge,
          resizeMode: "contain",
          alignSelf: "center",
        }}
      />
      <Text style={styles.title} numberOfLines={2}>
        {item.title}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 4,
        }}
      >
        <View>
          <Text style={styles.price}>${item.price}</Text>
          <Text style={styles.rate}>
            {item.rating.rate} <Icon name="star" color={"#FFCC00"} /> (
            {item.rating.count})
          </Text>
        </View>

        <TouchableOpacity
          style={styles.addBtn}
          onPress={handleAddtoCart}
        >
          <Icon name="plus" color={"white"} size={20} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: "white",
    margin: 4,
    borderWidth: 1,
    borderRadius: 8,
  },
  title: {
    height: 40,
    paddingHorizontal: 4,
    fontSize: 16,
    flexWrap: "wrap",
    fontWeight: "400",
  },
  price: {
    color: "#993333",
    fontSize: 16,
    fontWeight: "500",
  },
  rate: {
    fontSize: 16,
  },
  addBtn: {
    width: 32,
    height: 32,
    backgroundColor: "#3366CC",
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
});
