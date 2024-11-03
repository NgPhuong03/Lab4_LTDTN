import { View, StyleSheet, Text } from "react-native";

export default HotDeals = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hot Deals</Text>
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
