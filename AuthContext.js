import React, { createContext, useEffect, useState } from "react";
import { Alert, ActivityIndicator , StyleSheet, View} from "react-native";

import axios from "axios";
import { jwtDecode } from "jwt-decode";

// Tạo Context
const AuthContext = createContext();

// Tạo Provider
const MyProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [decode, setDecode] = useState();
  const [amountCart, setAmount] = useState();
  const [cart, setCartData] = useState(null);

  fetchCart = async () => {
    const res = await axios.get(
      "https://fakestoreapi.com/carts/user/" + decode.sub
    );
    data = res.data[0];
    setCartData(data);
    setAmount(data.products.length)
  };

  const LogIn = async (username, password) => {
    await axios
      .post("https://fakestoreapi.com/auth/login", {
        username: "mor_2314",
        password: "83r5^_",
      })
      .then(function (response) {
        const x = response.data.token;
        setToken(x);
        console.log("token: " + x);

        if(x) {
          setDecode(jwtDecode(x));
          fetchCart();
          setAuthenticated(true);
        }
      })
      .catch(function (error) {
        console.log(error);
        Alert.alert('Login Failed','Incorrect email or password. Please try again.');
      });
  };

  const LogOut = () => {
    setAuthenticated(false);
  };



  

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, LogIn, LogOut, decode , amountCart, setAmount, cart}}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, MyProvider };

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
