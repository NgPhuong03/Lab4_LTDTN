import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";

export default CartItem = ({ item, quantity }) => {
  const [amount, setAmount] = useState(quantity);

  const handleMinus = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
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
            <Text onPress={() => handleMinus()} style={styles.minus}>
              -
            </Text>
            <Text style={styles.amount}>{amount}</Text>
            <Text onPress={() => setAmount(amount+1)} style={styles.add}>
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
          <View style={{justifyContent: 'center', alignItems: 'center', paddingRight: 4}}>
            <Text style={styles.total}>Total: ${item.price * amount}</Text>
          </View>
          <TouchableOpacity>
            <Image
            source={require("../assets/icon/close.png")}
            style={styles.delete}
          />
          </TouchableOpacity>
          
        </View>
      </View>
    </View>
  );
};

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
