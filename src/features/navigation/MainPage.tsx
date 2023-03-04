import { Layout, Text } from "@ui-kitten/components";
import React, { FC } from "react";
import { Animated, StyleSheet, View, Easing, Image } from "react-native";
import { ShadowImage } from "./ShadowImage";

export interface MainPageProps {
  children?: React.ReactNode;
  title: string;
  RightAccessory?: React.ComponentType;
}

const AnimatedText = Animated.createAnimatedComponent(Text);
const AnimatedLayout = Animated.createAnimatedComponent(Layout);

const animated = new Animated.Value(0);

const onScroll = Animated.event([{
  nativeEvent: {
    contentOffset: {
      y: animated
    }
  }
}], { useNativeDriver: false });


export const MainPage: FC<MainPageProps> = (props: MainPageProps) => {
  const { RightAccessory } = props;
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

  return (
    <Layout style={pageStyles.flexView}>
      <View style={pageStyles.header}>
        <AnimatedLayout style={[pageStyles.toolbarContainer, { elevation: shadowElevation }]}>
          <View style={pageStyles.toolbar}>
            <View style={pageStyles.flexView} />
            {RightAccessory && <RightAccessory />}
          </View>

        </AnimatedLayout>

        <AnimatedText
          style={[pageStyles.title, { fontSize: fontSize, bottom: bottom }]}>
          {props.title}
        </AnimatedText>
      </View>

      <Animated.ScrollView
        style={pageStyles.flexView}
        contentContainerStyle={{ paddingTop: 110 }}
        scrollEventThrottle={16}
        onScroll={onScroll}>
        {props.children}
      </Animated.ScrollView>

        <ShadowImage />
    </Layout>
  );
};

export const pageStyles = StyleSheet.create({
  toolbarContainer: {
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 20,
  },
  toolbar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 5
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
  },
  titleButton: {
    flexDirection: 'row',
  },
  flexView: {
    flex: 1,
  },
  title: {
    fontFamily: 'Roboto-Light',
    width: '50%',
    paddingLeft: 15
  },
});
