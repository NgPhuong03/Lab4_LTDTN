import { View, StyleSheet, useWindowDimensions } from "react-native";
import { bannerImg } from "../data/bannerImage";
import { useState } from "react";
import RenderItem from "../components/RenderItem";
import Animated, {
  scrollTo,
  useAnimatedRef,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import { useRef } from "react";
import { useEffect } from "react";

export default Banner = () => {
  const { width } = useWindowDimensions();

  const [data, setData] = useState(bannerImg);
  const [isAutoplay, setAutoplay] = useState(true);
  const flatListRef = useAnimatedRef(null);
  const offset = useSharedValue(0);
  const interval = useRef(null);

  useDerivedValue(() => {
    scrollTo(flatListRef, offset.value, 0, true);
  });

  useEffect(() => {
    if (isAutoplay) {
      interval.current = setInterval(() => {
        offset.value = offset.value + width;
      }, 2000);
    } else {
      clearInterval(interval.current);
    }

    return () => {
      clearInterval(interval.current);
    };
  }, [isAutoplay, offset]);

  return (
    <View >
      <Animated.FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        onScrollBeginDrag={() => setAutoplay(false)}
        onScrollEndDrag={() => setAutoplay(true)}
        bounces={false}
        data={data}
        renderItem={({ item, index }) => {
          return <RenderItem index={index} item={item} />;
        }}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onEndReachedThreshold={0.5}
        onEndReached={() => setData([...data, ...bannerImg])}
        pagingEnabled={true}
        ref={flatListRef}
      />
    </View>
  );
};

