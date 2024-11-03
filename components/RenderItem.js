import { useWindowDimensions, View, Image, StyleSheet } from "react-native";

export default RenderItem = ({ index, item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={{width: width, height:width/2 , overflow: 'hidden'}}>
      <Image source={item.image} style={{ width: '100%' ,height: '100%',resizeMode: 'cover'}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {

  }
});
