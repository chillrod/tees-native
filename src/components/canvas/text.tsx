import { useState } from "react";
import { LayoutChangeEvent, View } from "react-native";

import {
  Gesture,
  GestureDetector,
  LongPressGestureHandler,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withSpring,
} from "react-native-reanimated";

interface ICanvasTextProps {
  text: string;
}

const BOUNDARY_OFFSET = 80;

export default function CanvasText(props: ICanvasTextProps) {
  const offset = useSharedValue<number>(0);
  const offsetY = useSharedValue<number>(0);
  const width = useSharedValue<number>(0);
  const height = useSharedValue<number>(0);

  const onLayout = (event: LayoutChangeEvent) => {
    width.value = event.nativeEvent.layout.width;
    height.value = event.nativeEvent.layout.height;
  };

  const gesture = Gesture.Pan()
    .onChange((e) => {
      offset.value += e.changeX;
      offsetY.value += e.changeY;
    })
    .onEnd((e) => {
      offset.value = withDecay({
        velocity: e.velocityX,
        rubberBandEffect: true,
        clamp: [0, width.value / 2 + BOUNDARY_OFFSET],
      });

      offsetY.value = withDecay({
        velocity: e.velocityY,
        rubberBandEffect: true,
        clamp: [0, height.value / 2 + BOUNDARY_OFFSET + 500],
      });
    });

  const [scale, setScale] = useState(24);

  const animatedStyles = useAnimatedStyle(() => ({
    fontSize: withSpring(scale),
    transform: [{ translateX: offset.value }, { translateY: offsetY.value }],
  }));

  const handleCancelLongPress = () => {
    setScale(24);
  };

  const handleLongPress = () => {
    setScale(28);
  };

  return (
    <View onLayout={onLayout}>
      <GestureDetector gesture={gesture}>
        <LongPressGestureHandler
          onActivated={handleLongPress}
          onEnded={handleCancelLongPress}
        >
          <Animated.Text
            style={animatedStyles}
            className="text-stone-200 text-4xl"
          >
            {props.text}
          </Animated.Text>
        </LongPressGestureHandler>
      </GestureDetector>
    </View>
  );
}
