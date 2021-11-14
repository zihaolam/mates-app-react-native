import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Icon } from "react-native-elements";
import TodoPage from "screens/TodoPage";
import SettingsPage from "screens/SettingsPage";
import { TYPOGRAPHY, COLORS } from "styles";
import { useNavigation } from "@react-navigation/native";
import { AmazonEmber } from "styles/typography";

const TodoStack = createStackNavigator();

const screenOptions = {
  cardStyle: {
    backgroundColor: "white",
  },
  headerTitleStyle: TYPOGRAPHY.HEADER_TITLE,
  headerTitleAlign: "center",
  headerBackTitle: "Back",
};

const todoStackScreens = [
  {
    name: "todo-list",
    component: TodoPage,
    headerHeight: 90,
    headerBg: "white",
    label: "Todos",
  },
  {
    name: "todo-settings",
    component: SettingsPage,
    headerHeight: 90,
    headerBg: "white",
    label: "Settings",
  },
];

const TodoNavigator = () => {
  const navigator = useNavigation();
  return (
    <TodoStack.Navigator screenOptions={screenOptions}>
      {todoStackScreens.map((screen, i) => (
        <TodoStack.Screen
          key={`feed-stack${i}`}
          name={screen.name}
          component={screen.component}
          options={{
            title: screen.label,
            headerTitleStyle: {
              fontSize: TYPOGRAPHY.H3.fontSize,
              fontFamily: AmazonEmber[700],
            },
            headerStyle: {
              height: screen.headerHeight,
              backgroundColor: screen.headerBg,
              elevation: 0,
              shadowColor: "transparent",
            },
            headerTintColor: COLORS.PRIMARY,
            headerRight:
              screen.name !== "todo-settings"
                ? () => (
                    <Icon
                      name="cog"
                      type="font-awesome"
                      color={COLORS.PRIMARY}
                      size={24}
                      onPress={() => navigator.navigate("todo-settings")}
                      style={{ marginRight: 12 }}
                    />
                  )
                : undefined,
          }}
        />
      ))}
    </TodoStack.Navigator>
  );
};

export default TodoNavigator;
