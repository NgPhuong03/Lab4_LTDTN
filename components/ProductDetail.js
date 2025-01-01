import axios from "axios";
import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Image,
  useWindowDimensions,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function ProductDetail  ({ navigation, route }) {
  const { width } = useWindowDimensions();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const { id } = route.params;
  console.log(id);

  useEffect(() => {
    const fecthProd = async () => {
      const res = await axios("https://fakestoreapi.com/products/" + id);
      const prod = res.data;
      if (res.error) {
        console.error(res.error);
      }
      setData(prod);
      console.log(prod);
      navigation.setOptions({ title: prod.title });
      setLoading(false);
    };

    fecthProd();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#006633" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={{ flexGrow: 1, margin: 12 }}>
        <View
          style={{
            width: width,
            height: width * 1.2,
            alignItems: "center",
            justifyContent: "center",
            paddingRight: 20,
          }}
        >
          <Image
            source={{ uri: data.image }}
            style={{ width: width, height: width * 1.2, resizeMode: "contain" }}
          />
        </View>

        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>{data.description}</Text>
        <Text style={styles.price}>Price: ${data.price}</Text>
        <Text style={styles.rating}>
          Rating: {data.rating.rate}
          <Icon name="star" color={"#FFCC00"} /> ({data.rating.count} reviews)
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    alignSelf: "flex-start",
    marginVertical: 4,
  },
  description: {
    fontSize: 16,
    flexWrap: "wrap",
    marginVertical: 4,
  },
  price: {
    fontWeight: "bold",
    fontSize: 17,
    marginVertical: 4,
  },
  rating: {
    fontWeight: "bold",
    fontSize: 17,
    marginVertical: 4,
  },
});
