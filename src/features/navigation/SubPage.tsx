import { useNavigation } from "@react-navigation/native";
import { Button, Layout, Text } from "@ui-kitten/components";
import React from "react";
import { ScrollView, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { FontAwesomeIcon } from "../../common/FontAwesomeIcon";
import { pageStyles } from "./MainPage";
import { ShadowImage } from "./ShadowImage";

export interface SubPageProps {
  children?: React.ReactNode;
  title?: string;
  level?: string;
  contentContainerStyle?: StyleProp<ViewStyle>;
  rightAccessory?: () => React.ReactNode;
  leftAccessory?: () => React.ReactNode;
}

export const SubPage: React.FC<SubPageProps> = (props: SubPageProps) => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  }

  return (
    <Layout style={pageStyles.flexView} level={props.level}>
      <View style={pageStyles.header}>
        <Layout style={[pageStyles.toolbarContainer, { elevation: 5 }]}>
          <View style={pageStyles.toolbar}>
            {
              props.leftAccessory
                ? props.leftAccessory()
                : <View style={{ width: '10%' }}><Button
                  onPress={goBack}
                  style={{ width: 50 }}
                  appearance='ghost'
                  status='control'
                  accessoryLeft={(props) => <FontAwesomeIcon iconStyle={props?.style} name="arrow-left" />} />
                </View>
            }

            {
              props.title &&
              <Text
                style={[pageStyles.title, subPageStyles.subPageTitle]}>
                {props.title}
              </Text>
            }

            <View style={pageStyles.flexView} />
            {props.rightAccessory && props.rightAccessory()}
          </View>

        </Layout>
      </View>

      <ScrollView
        style={pageStyles.flexView}
        contentContainerStyle={[{ paddingTop: 45 }, props.contentContainerStyle]}>
        {props.children}
      </ScrollView>

      <ShadowImage />
    </Layout>
  );
};

const subPageStyles = StyleSheet.create({
  subPageTitle: {
    fontSize: 17
  }
})