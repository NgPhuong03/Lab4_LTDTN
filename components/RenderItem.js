import { useWindowDimensions, View, Image, StyleSheet } from "react-native";

export default RenderItem = ({ index, item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={{width: width, height:width/2}}>
      <Image source={item.image} style={{ width: width ,height: width/2}}/>
    </View>
  );
};

const styles = StyleSheet.create({
});
