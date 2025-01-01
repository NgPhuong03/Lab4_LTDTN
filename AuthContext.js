import React, { createContext, useEffect, useState } from "react";
import { Alert, ActivityIndicator, StyleSheet, View } from "react-native";

import axios from "axios";
import { jwtDecode } from "jwt-decode";

// Tạo Context
const AuthContext = createContext();

// Tạo Provider
const MyProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [decode, setDecode] = useState();
  const [amountCart, setAmount] = useState(0);
  const [cart, setCartData] = useState(null);
  const [cartProd, setCartProd] = useState(null);
  const [user,setUser] = useState(null);

  const fetchCart = async (sub) => {
    const res = await axios.get(
      "https://fakestoreapi.com/carts/user/" + sub
    );
    setCartData(res.data[0]);
    setCartProd(res.data[0].products);
    setAmount(res.data[0].products.length);
  };

  // "mor_2314"
  // "83r5^_"
  const LogIn = async (username, password) => {
    await axios
      .post("https://fakestoreapi.com/auth/login", {
        username: username,
        password: password,
      })
      .then(async function (response) {
        const x = response.data.token;
        setToken(x);
        console.log("token: " + x);
        const de = jwtDecode(x);
        setDecode(de);
        
        await fetchCart(de.sub);
        setAuthenticated(true);
      })
      .catch(function (error) {
        console.log(error);
        Alert.alert(
          "Login Failed",
          "Incorrect email or password. Please try again."
        );
      });
  };

  const LogOut = () => {
    setAuthenticated(false);
  };



  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        LogIn,
        LogOut,
        decode,
        amountCart,
        setAmount,
        cart,
        cartProd,
        setCartProd,
        user,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, MyProvider };

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
