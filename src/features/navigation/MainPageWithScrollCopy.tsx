import { Layout, Text } from "@ui-kitten/components";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { Animated, View, Easing, NativeScrollEvent } from "react-native";
import { useSharedValue } from "react-native-reanimated";
// import { Extrapolation, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { NativeSyntheticEvent } from "react-native/Libraries/Types/CoreEventTypes";
import { pageStyles } from "./MainPage";
import { ShadowImage } from "./ShadowImage";

export interface MainPageWithScrollCopyProps {
  children: JSX.Element;
  title: string;
  rightAccessory?: () => React.ReactNode;
  renderAfterContent?: (() => React.ReactNode) | false;
}

const AnimatedText = Animated.createAnimatedComponent(Text);
const AnimatedLayout = Animated.createAnimatedComponent(Layout);

const animated = new Animated.Value(0);

export const MainPageWithScrollCopy: FC<MainPageWithScrollCopyProps> = (props: MainPageWithScrollCopyProps) => {
  const fontSize = animated.interpolate({
    inputRange: [0, 50],
    outputRange: [35, 20],
    extrapolate: "clamp",
    easing: Easing.ease
  });

  const bottom = animated.interpolate({
    inputRange: [0, 50],
    outputRange: [0, 40],
    extrapolate: "clamp",
    easing: Easing.ease
  });

  const shadowElevation = animated.interpolate({
    inputRange: [0, 50],
    outputRange: [0, 5],
    extrapolate: "clamp",
    easing: Easing.ease
  });

  const handleScroll = Animated.event<NativeScrollEvent>([{
    nativeEvent: {
      contentOffset: {
        y: animated
      }
    }
  }]);


  const { style, onScroll, scrollEventThrottle, onMomentumScrollEnd, contentContainerStyle, ...rest } = props.children.props;

  const childClone = React.cloneElement(props.children, {
    onScroll: handleScroll,
    style: { ...style, ...pageStyles.flexView },
    scrollEventThrottle: 16,
    contentContainerStyle: { ...contentContainerStyle, paddingTop: 110 },
    ...rest
  })

  return (
    <Layout style={pageStyles.flexView}>
      <View style={pageStyles.header}>
        <AnimatedLayout style={[pageStyles.toolbarContainer, { elevation: shadowElevation }]}>
          <View style={pageStyles.toolbar}>
            <View style={pageStyles.flexView} />
            {props.rightAccessory && props.rightAccessory()}
          </View>

        </AnimatedLayout>

        <AnimatedText
          style={[pageStyles.title, { fontSize: fontSize, bottom: bottom }]}>
          {props.title}
        </AnimatedText>
      </View>

      {childClone}

      {props.renderAfterContent && props.renderAfterContent()}

      <ShadowImage />
    </Layout>
  );
};
