import {
  useWindowDimensions,
  Image,
  StyleSheet,
  View,
} from "react-native";

export default BackImage = ({ index, item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[
      StyleSheet.absoluteFillObject,
      {
        width: width,
        height: width
      },
    ]}>
      <Image
      source={item.image}
      style={[
        StyleSheet.absoluteFillObject,
        {
          width: width,
          height: width
        },
      ]}
    />
    </View>
    
  );
};
