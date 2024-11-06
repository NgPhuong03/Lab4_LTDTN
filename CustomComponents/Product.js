import { TouchableOpacity } from "react-native";
import {
  useWindowDimensions,
  View,
  Image,
  StyleSheet,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
export default Product = ({ item }) => {
  console.log("Prod compn loaded");

  const { width } = useWindowDimensions();
  const edge = width * 0.45;

  return (
    <TouchableOpacity 
    style={[{ width: edge, height: edge + edge * 2/4  }, styles.container]}
    onPress={() => {console.log('prod pressed');
    }}>
      <Image
        source={{ uri: item.image }}
        style={{ width: edge, height: edge , resizeMode: 'contain'}}
      />
      <Text style={styles.title} numberOfLines={2}>
        {item.title}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 4,
        }}
      >
        <View>
          <Text style={styles.price}>${item.price}</Text>
          <Text style={styles.rate}>
            {item.rating.rate} <Icon name="star" color={"#FFCC00"} /> (
            {item.rating.count})
          </Text>
        </View>

        <TouchableOpacity style={styles.addBtn} 
        onPress={() => {
          console.log('add pressed');
          
        }}>
          <Icon name="plus" color={"white"} size={20} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: "white",
    margin: 4,
    borderWidth: 1, 
    borderRadius: 8
  },
  title: {
    height: 40,
    paddingHorizontal: 4,
    fontSize: 16,
    flexWrap: "wrap",
    fontWeight: "400",
  },
  price: {
    color: "#993333",
    fontSize: 16,
    fontWeight: "500",
  },
  rate: {
    fontSize: 16,
  },
  addBtn: {
    width: 32,
    height: 32,
    backgroundColor: "#3366CC",
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
});
