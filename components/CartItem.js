import { useContext, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../AuthContext";

export default function CartItem({
  item,
  quantity,
  deleteItem,
  totalAmount,
  setTotalAmount,
}) {
  const [amount, setAmount] = useState(quantity);
  const { cartProd, cart, user } = useContext(AuthContext);

  const update = async () => {
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
  };

  const handleMinus = () => {
    if (amount > 1) {
      setAmount(amount - 1);
      setTotalAmount(totalAmount - item.price);
      update();
    }
  };

  const handlePlus = () => {
    setAmount(amount + 1);
    setTotalAmount(totalAmount + item.price);
    update();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      {/* Tinh tien */}
      <View style={{ flexDirection: "row", marginVertical: 8 }}>
        <Image source={{ uri: item.image }} style={styles.img} />

        {/* So luong */}
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={styles.price}>${item.price}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text onPress={handleMinus} style={styles.minus}>
              -
            </Text>
            <Text style={styles.amount}>{amount}</Text>
            <Text onPress={handlePlus} style={styles.add}>
              +
            </Text>
          </View>
        </View>

        {/* Tong */}
        <View
          style={{
            flex: 1.5,
            flexDirection: "row",
            alignItems: "center",
            padding: 4,
            justifyContent: "space-evenly",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingRight: 4,
            }}
          >
            <Text style={styles.total}>
              Total: ${(item.price * amount).toFixed(2)}
            </Text>
          </View>
          <TouchableOpacity onPress={() => deleteItem(item, amount)}>
            <Image
              source={require("../assets/icon/close.png")}
              style={styles.delete}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    margin: 4,
    marginVertical: 4,
    padding: 8,
    borderRadius: 8,
    borderColor: "#aaa",
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    margin: 4,
  },
  title: {
    fontSize: 20,
  },
  price: {
    fontWeight: "bold",
    fontSize: 18,
  },
  minus: {
    fontWeight: "bold",
    fontSize: 18,
  },
  add: {
    fontWeight: "bold",
    fontSize: 18,
  },
  amount: {
    fontWeight: "bold",
    fontSize: 18,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignSelf: "center",
  },
  total: {
    fontWeight: "bold",
    fontSize: 18,
  },
  delete: {
    fontSize: 18,
    color: "red",
    width: 20,
    height: 20,
    marginHorizontal: 8,
  },
});
