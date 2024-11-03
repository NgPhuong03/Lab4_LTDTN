import { View, StyleSheet, StatusBar } from "react-native";
import Banner from "../components/Banner";
import HotDeals from '../components/HotDeals';

export default Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#999'}/>
      <Banner />
      <HotDeals/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 4,
    flex: 1,
    backgroundColor: "#ccc"
  },
});
