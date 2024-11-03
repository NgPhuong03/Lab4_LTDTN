import { View, StyleSheet, StatusBar } from "react-native";
import Banner from "../components/Banner";
import HotDeals from '../components/HotDeals';

export default Home = () => {
  return (
    <View style={styles.container}>
      <Banner />
      <HotDeals/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
});
