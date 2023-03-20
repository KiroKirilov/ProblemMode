import { Layout, Text } from "@ui-kitten/components";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, View, Easing, SectionList, SectionListProps, NativeScrollEvent } from "react-native";
import { Gesture, GestureDetector, GestureHandlerRootView, GestureType } from "react-native-gesture-handler";
import { NativeSyntheticEvent } from "react-native/Libraries/Types/CoreEventTypes";
import { pageStyles } from "./MainPage";
import { ShadowImage } from "./ShadowImage";

export interface MainPageWithSectionsProps {
  children: JSX.Element;
  title: string;
  rightAccessory?: () => React.ReactNode;
  renderAfterContent?: (() => React.ReactNode) | false;
  onLoadNext?: () => void;
  hasMoreData?: boolean;
}

const AnimatedText = Animated.createAnimatedComponent(Text);
const AnimatedLayout = Animated.createAnimatedComponent(Layout);

const animated = new Animated.Value(0);

const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }: NativeScrollEvent) => {
  const paddingToBottom = 1200;

  return layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom;
};

const pagesLoaded: { [key: string]: any } = {};

export const MainPageWithSections = (props: MainPageWithSectionsProps) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log(page);
  }, [page])

  useEffect(() => {
    pagesLoaded[props.title] = {};
  }, [])

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
  const handleMomentumScroll = useCallback((e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const shouldLoad = !pagesLoaded[props.title] || !pagesLoaded[props.title][page];

    if (props.onLoadNext && isCloseToBottom(e.nativeEvent) && shouldLoad && props.hasMoreData) {
      props.onLoadNext();
      pagesLoaded[props.title][page] = true;
      setPage(prev => prev + 1);
    }
  }, [page, props.hasMoreData]);

  const handleScroll = useCallback(Animated.event<NativeScrollEvent>([{
    nativeEvent: {
      contentOffset: {
        y: animated
      }
    }
  }], {
    listener: handleMomentumScroll,
    useNativeDriver: false
  }), [page, props.hasMoreData]);




  const { style, onScroll, scrollEventThrottle, onMomentumScrollEnd, contentContainerStyle, ...rest } = props.children.props;

  const childClone = React.cloneElement(props.children, {
    onScroll: handleScroll,
    // onMomentumScrollEnd: handleMomentumScroll,
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
