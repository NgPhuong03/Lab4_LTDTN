import { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { AuthContext } from "../AuthContext";
import CartItem from "../components/CartItem";
import axios from "axios";
import Modal from "react-native-modal";

export default function Cart({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [prods, setProds] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const [deleted, setDeleted] = useState(null);
  const [deleted_quantity, setDeleted_Quantity] = useState(null);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const { cart, cartProd, setCartProd, setAmount } = useContext(AuthContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const promises = cartProd.map(({ productId, quantity }) =>
          axios.get(`https://fakestoreapi.com/products/${productId}`)
        );
        const responses = await Promise.all(promises);
        const fetchedProducts = responses.map((response) => response.data);
        let sum = 0;
        fetchedProducts.forEach(
          (value, index) =>
            (sum += totalAmount + value.price * cartProd[index].quantity)
        );
        setTotalAmount(sum);
        setProds(fetchedProducts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [cartProd]);

  const callApiDelete = async () => {
    setProds([]);
    setTotalAmount(0);
    setCartProd([]);
    setAmount(0);
    await fetch(`https://fakestoreapi.com/carts/${cart.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
    toggleModal();
  };

  const deleteItem = (deleted, quantity) => {
    setDeleted(deleted);
    setDeleted_Quantity(quantity);
    toggleModal();
  };

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

      {isLoading ? (
        <LoadingView />
      ) : prods.length === 0 ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>You have no products in your cart.</Text>
          <TouchableOpacity
            style={{
              width: 160,
              height: 32,
              backgroundColor: "blue",
              margin: 8,
              marginLeft: 32,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.navigate("home")}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              SHOPPING NOW!
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Modal isVisible={isModalVisible}>
            <View style={styles.modalContent}>
              <Text style={styles.title}>
                Are you sure to delete this product?
              </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.yesButton}
                  onPress={() => {
                    if (prods.length === 1) {
                      callApiDelete();
                    } else {
                      setProds(prods.filter((item) => item.id != deleted.id));
                      setTotalAmount(totalAmount - deleted.price * deleted_quantity);
                      toggleModal();
                    }
                  }}
                >
                  <Text style={styles.buttonText}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.noButton} onPress={toggleModal}>
                  <Text style={styles.buttonText}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <ScrollView>
            {prods.map((item, index) => (
              <CartItem
                item={item}
                key={index}
                quantity={cartProd[index].quantity}
                deleteItem={deleteItem}
                totalAmount={totalAmount}
                setTotalAmount={setTotalAmount}
              />
            ))}
          </ScrollView>
          <View
            style={{
              width: 360,
              height: 60,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                width: 200,
                fontSize: 18,
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Total amount: ${totalAmount?.toFixed(2)}
            </Text>
            <TouchableOpacity
              style={{
                width: 120,
                height: 32,
                backgroundColor: "blue",
                margin: 8,
                marginLeft: 32,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Check out
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

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
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  yesButton: {
    width: 100,
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
  noButton: {
    width: 100,
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});
