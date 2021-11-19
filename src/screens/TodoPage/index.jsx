import { Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import NoticeBoard from "./NoticeBoard";
import TodoList from "./TodoList";
import { COLORS, TYPOGRAPHY } from "styles";
import { AmazonEmber } from "styles/typography";

const Tab = createMaterialTopTabNavigator();

const screenOptions = {
  tabBarActiveTintColor: COLORS.PRIMARY,
  tabBarIndicatorStyle: { backgroundColor: "transparent" },
  tabBarInactiveTintColor: COLORS.GRAY,
  tabBarLabelStyle: {
    textTransform: "none",
    backgroundColor: "#FFFFFF",
    fontSize: 20,
    fontFamily: AmazonEmber[700],
    letterSpacing: -0.5,
    textAlign: "center",
  },
};

const TodoPage = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Notice Board" component={NoticeBoard} />
      <Tab.Screen name="To-do List" component={TodoList} />
    </Tab.Navigator>
  );
};

export default TodoPage;
