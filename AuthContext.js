import React, { createContext, useEffect, useState } from "react";
import { Alert, ActivityIndicator } from "react-native";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

// Tạo Context
const AuthContext = createContext();

// Tạo Provider
const MyProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [decode, setDecode] = useState();

  // '22521159@gm.uit.edu.vn'
  useEffect(() => {
    const getToken = async (username, password) => {
      await axios
         .post("https://fakestoreapi.com/auth/login", {
           username: "mor_2314",
           password: "83r5^_",
         })
         .then(function (response) {
           setToken(response.data.token);
           
         })
         .catch(function (error) {
           console.log(error);
         });
   }

    getToken();
}, [isLoading]); // Mảng rỗng để chạy một lần khi component mount



  const LogIn =  (username, password) => {
    setLoading(true);
      console.log("token: "+ token);
      if (token) {
        setLoading(false);
        setDecode(jwtDecode(token));
        setAuthenticated(true);
      }
  };

  const LogOut = () => {
    setAuthenticated(false);
  };
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, LogIn, LogOut, decode, setLoading, isLoading }}
    >
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, MyProvider };
