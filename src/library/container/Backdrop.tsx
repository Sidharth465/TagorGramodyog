import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import SWView from "../components/SView";


const Backdrop = () => {
  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      style={{
        flex: 1,
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: 99,
      }}
    >
      <LinearGradient
        colors={[
          "rgba(0, 0, 0, 0.70)",
          "rgba(0, 0, 0, 0.70)",
          "rgba(0, 0, 0, 0.70)",
          "rgba(0, 0, 0, 0.70)",
        ]}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: "100.1%",
          height: "100%",
        }}
      >
        <SWView
          position={"absolute"}
          top={0}
          bottom={0}
          right={0}
          left={0}
          borderRadius={"s"}
          // zIndex={1}
        />
      </LinearGradient>
    </Animated.View>
  );
};

export default Backdrop;