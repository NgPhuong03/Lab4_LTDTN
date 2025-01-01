import {
  View,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import Banner from "../components/Home/Banner";
import HotDeals from "../components/Home/HotDeals";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Slogan from "../components/Home/Slogan";
import NewArrival from "../components/Home/NewArrival";
import { AuthContext } from "../AuthContext";

export default  function Home ({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [prods, setProds] = useState(null);
  const [hotdeals, setHotdeals] = useState(null);
  const [newArrvial, setNews] = useState(null);

  useEffect(() => {
    fetchdata = async () => {
      await axios
        .get("https://fakestoreapi.com/products")
        .then(function (res) {
          let x = res.data;
          let hots = x.filter((e) => e.price < 100);
          let newArr = x.filter((e) => e.id > 9);
          setHotdeals(hots);
          setNews(newArr);
          setProds(x);
          setLoading(false);
        })
        .catch(function (e) {
          console.error(e.message);
        });
    };

    fetchdata();
  }, []);

  turnOffHeaderShown = () => {};
  const toDetail = (id) => {
    navigation.navigate("HomeDetail", {id: id});
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
      {isLoading ? 
        <LoadingView />
       : 
        <View>
          <ScrollView style={{ flexGrow: 1 }}>
            <Slogan />
            <Banner />
            <HotDeals items={hotdeals} onPress={toDetail} />
            <NewArrival items={newArrvial} onPress={toDetail} />
          </ScrollView>
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
