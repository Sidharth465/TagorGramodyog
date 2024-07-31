import { useTheme } from "@shopify/restyle";
import { useCallback } from "react";
import {
  ActivityIndicator,
  DimensionValue,
  Pressable
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { Theme } from "../theme/theme";
import Text from "./SVText";
import BWView from "./SView";

type BWButtonType = {
  surface?: keyof Theme["colors"];
  title: string;
  height?: number;
  width?: DimensionValue;
  onPress?: () => void;
  href?: string;
  testId?: string;
  marginHorizontal?: keyof Theme["spacing"];
  paddingHorizontal?: keyof Theme["spacing"];
  marginRight?: keyof Theme["spacing"];
  marginLeft?: keyof Theme["spacing"];
  marginTop?: keyof Theme["spacing"];
  paddingTop?: keyof Theme["spacing"];
  disabled?: boolean;
  processing?: boolean;
  borderWidth?: number;
  textVariant?:"gilroy-bold"
  borderColor?: keyof Theme["colors"];
  shadow?:boolean,
  fontSize?:number, 
  textColor?: keyof Theme["colors"]
};

type ResponsiveTextVariant = {
  phone?: keyof Theme["textVariants"];
  tablet?: keyof Theme["textVariants"];
  largeTablet?: keyof Theme["textVariants"];
};
const SVButton = ({
  textColor="text_on_secondary",
  surface = "secondary",
  title = "",
  height = 31,
  testId = "",
  width = "auto",
  onPress = () => undefined,
  marginHorizontal = "none",
  paddingHorizontal = "none",
  marginLeft = "none",
  marginRight = "none",
  marginTop = "none",
  paddingTop = "none",
  disabled = false,
  processing = false,
  borderWidth = 0,
  textVariant = "gilroy-bold",
  borderColor = "secondary",
  fontSize,
  shadow
}: BWButtonType) => {
  const theme = useTheme<Theme>();

  const pressed = useSharedValue(0);
  const onPressCallback = useCallback(
    () => setTimeout(() => onPress()),
    [onPress]
  );
  const onPressInCallback = useCallback(() => {
    pressed.value = withTiming(1, { duration: 100 });
  }, []);
  const onPressOutCallback = useCallback(() => {
    pressed.value = withTiming(0, { duration: 100 });
  }, []);

  const buttonStyle = useAnimatedStyle(() => {
    if (process.env.NODE_ENV === "test") return {};
    return {
      transform: [
        {
          scale: withTiming(pressed.value ? 0.96 : 1, {
            duration: 100,
            // easing: Easing.ease,
          }),
        },
      ],
      // backgroundColor: interpolateColor(pressed.value, [0, 1], [theme.colors.secondary, theme.colors.secondary_dark]),
      borderRadius: 5,
    };
  });

  return (
    <Pressable
      testID={testId}
      onPress={onPressCallback}
      onPressIn={onPressInCallback}
      onPressOut={onPressOutCallback}
      disabled={disabled || processing}
    >
      <Animated.View style={buttonStyle}>
        <BWView
          backgroundColor={disabled ? "list_background" : surface}
          height={height}
          borderRadius={"ss"}
          justifyContent={"center"}
          alignItems={"center"}
          marginTop={marginTop}
          marginRight={marginRight}
          paddingHorizontal={paddingHorizontal}
          marginLeft={marginLeft}
          paddingTop={paddingTop}
          shadowColor={"ailment_background"}
          width={width}
          shadowOpacity={1}
          borderWidth={borderWidth}
          borderColor={borderColor}
          elevation={shadow ?  5:0}
          
        >
          {processing ? (
            <ActivityIndicator color={'#000'} />
          ) : (
            <Text
              fontFamily={textVariant}
              color={disabled ?"text_on_secondary":textColor}
              opacity={disabled ? 0.3 : 1}
              fontSize={fontSize}
            >
              {title}
            </Text>
          )}
        </BWView>
      </Animated.View>
    </Pressable>
  );
};

export default SVButton;