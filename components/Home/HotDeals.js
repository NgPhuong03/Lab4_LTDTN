import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
} from "react-native";
import Product from "../Product";

export default HotDeals = ({ items , onPress}) => {
 

  const renderItem = ({ item }) => (
    <View>
      <Product item={item} onPress={onPress}/>
    </View>
  );

  return (
    
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.title}>Hot Deals</Text>
        <Image
          style={styles.icon}
          source={require("../../assets/icon/fire.png")}
        />
      </View>
      
        <View style={styles.prodContainer}>
          <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString() + item.id}
            numColumns={2}
            scrollEnabled={false}
          />
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#FF3333",
    padding: 8,
  },
  icon: {
    width: 32,
    height: 32,
  },
  prodContainer: {
    flexGrow:1,
    backgroundColor: "#ddd",
  },
  row: {
    margin: 4,
  },
});
