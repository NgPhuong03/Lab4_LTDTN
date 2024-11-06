import { View, StyleSheet, StatusBar, ActivityIndicator, ScrollView } from "react-native";
import Banner from "../components/Banner";
import HotDeals from "../components/HotDeals";
import axios from "axios";
import { useEffect, useState } from "react";
import Slogan from "../components/Slogan";
import NewArrival from "../components/NewArrival";


export default Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [prods, setProds] = useState();
  const [hotdeals, setHotdeals] = useState();
  const [newArrvial, setNews] = useState();
  const LoadingView = () => {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#006633" />
      </View>
    );
  };

  useEffect(() => {
    fetchdata = async () => {
      await axios
        .get("https://fakestoreapi.com/products")
        .then(function (res) {
          let x = res.data;
          let hots = x.filter(e => 
            e.price < 100
          )
          let newArr = x.filter( e => e.id > 9)
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
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#999"} />
      {isLoading ? (
        <LoadingView />
      ) : (
        <View>
          <ScrollView style={{ flexGrow: 1 }}>
            <Slogan />
            <Banner />
            <HotDeals items={hotdeals} />
            <NewArrival items={newArrvial} />
          </ScrollView>
        </View>
      )}
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
