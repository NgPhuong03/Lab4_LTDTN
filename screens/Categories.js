import axios from "axios";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  ScrollView,
  ActivityIndicator
} from "react-native";
import RenderItem from "../components/Categories/RenderItem";
import Product from '../components/Product';

export default function Categories ({ navigation })  {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [categories, setCategories] = useState();
  const [selected, setSelected] = useState("All");

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios("https://fakestoreapi.com/products/categories");
      const title = res.data;
      setCategories(["All", ...title]);
    };

    const fetchAll = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      const data = res.data;
      if (selected != "All") {
        const x = data.filter((e) => e.category === selected);
        setData(x);
      } else {
        setData(data);
      }
      setLoading(false);
    };

    fetchCategories();
    fetchAll();
  }, [selected]);

  const toDetail = (id) => {
    navigation.navigate("CateDetail", { id: id });
  };

  const renderItem = ({ item }) => (
    <View>
      <Product item={item} onPress={toDetail} />
    </View>
  );

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
      {isLoading ? (
        <LoadingView />
      ) : (
        <ScrollView style={{ flexGrow: 1 }}>
          <View style={styles.categories}>
            <FlatList
              data={categories}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <RenderItem
                  title={item}
                  selected={selected}
                  set={setSelected}
                />
              )}
              horizontal
            />
          </View>
          <View style={styles.prodContainer}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString() + item.id}
              numColumns={2}
              scrollEnabled={false}
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
    flex: 1,
    backgroundColor: "white",
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  categories: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  prodContainer: {
    flexGrow: 1,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: 'center'
  },
});
