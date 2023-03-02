import { Layout, Text } from "@ui-kitten/components";
import React, { FC } from "react";
import { Animated, StyleSheet, View, Easing, Image } from "react-native";

export interface MainPageProps {
  children?: React.ReactNode;
  title: string;
  RightAccessory?: React.ComponentType;
}

const shadowImage = require("../../assets/images/shadow.png");
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
    <Layout style={{ flex: 1 }}>
      <View style={styles.header}>
        <AnimatedLayout style={[styles.toolbarContainer, { elevation: shadowElevation }]}>
          <View style={styles.toolbar}>
            <View style={styles.flexView} />
            {RightAccessory && <RightAccessory />}
          </View>

        </AnimatedLayout>

        <AnimatedText
          style={[styles.title, { fontSize: fontSize, bottom: bottom }]}>
          {props.title}
        </AnimatedText>
      </View>

      <Animated.ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingTop: 110 }}
        scrollEventThrottle={16}
        onScroll={onScroll}>
        {props.children}
      </Animated.ScrollView>

        <Image style={styles.shadowImage} source={shadowImage} />
    </Layout>
  );
};

const styles = StyleSheet.create({
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
  statusBar: {
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
  shadowImage: {
    position: 'absolute',
    bottom: -14,
    opacity: 0.4,
    resizeMode: 'stretch',
    width: '100%',
    height: 50,
  }
});
