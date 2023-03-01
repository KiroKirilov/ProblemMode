import { Layout, Text } from "@ui-kitten/components";
import React, { FC, useRef } from "react";
import { Animated, StyleSheet, View, Easing } from "react-native";

export interface MainPageProps {
  children?: React.ReactNode;
  title: string;
}

var AnimatedText = Animated.createAnimatedComponent(Text);

const animated = new Animated.Value(0);

const onScroll = Animated.event([{
  nativeEvent: {
    contentOffset: {
      y: animated
    }
  }
}], { useNativeDriver: false });


export const MainPage: FC<MainPageProps> = (props: MainPageProps) => {
  const fontSize = animated.interpolate({
    inputRange: [0, 60],
    outputRange: [40, 20],
    extrapolate: "clamp",
    easing: Easing.ease
  });

  const bottom = animated.interpolate({
    inputRange: [0, 60],
    outputRange: [0, 45],
    extrapolate: "clamp",
    easing: Easing.ease
  });

  return (
    <Layout style={{ flex: 1 }}>
      <View style={styles.header}>
        <Layout level='3' style={styles.toolbarContainer}>
          <View style={styles.toolbar}>

          </View>
        </Layout>

        <AnimatedText
          style={[styles.title, { fontSize: fontSize, bottom: bottom, paddingLeft: 15, fontFamily: 'Roboto-Thin' }]}>
          {props.title}
        </AnimatedText>
      </View>

      <Animated.ScrollView
        style={{ paddingTop: 110, flex: 1 }}
        scrollEventThrottle={16}
        onScroll={onScroll}
        decelerationRate={0.6} >
        {props.children}
      </Animated.ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  toolbarContainer: {
    height: 56,
  },
  statusBar: {
  },
  toolbar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2
  },
  titleButton: {
    flexDirection: 'row',
  },
  flexView: {
    flex: 1,
  },
  title: {
  }
});
