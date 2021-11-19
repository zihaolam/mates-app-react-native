import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { SafeAreaView } from "react-native";
import { Icon } from "react-native-elements";
import { COLORS, TYPOGRAPHY } from "styles";
import HomeStack from "navigation/HomeStack";
import FoodStack from "navigation/FoodStack";
import PaymentStack from "navigation/PaymentStack";
import CalendarStack from "navigation/CalendarStack";
import TodoStack from "navigation/TodoStack";

const BottomTab = createBottomTabNavigator();

const tabBarOptions = {
  activeTintColor: COLORS.PRIMARY,
  labelStyle: {
    ...TYPOGRAPHY.BODY_SMALL,
  },
  style: {
    height: 60,
    paddingTop: 3,
    paddingBottom: 0,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
};

export const bottomTabScreens = [
  {
    name: "home",
    component: HomeStack,
    tabBarLabel: "Home",
    iconName: "home",
    iconType: "font-awesome",
    iconSize: 32,
  },
  {
    name: "todo",
    component: TodoStack,
    tabBarLabel: "Todos",
    iconName: "list-alt",
    iconType: "font-awesome",
    iconSize: 32,
  },
  {
    name: "food",
    component: FoodStack,
    tabBarLabel: "Food",
    iconName: "kitchen",
    iconType: "material",
    iconSize: 32,
  },
  {
    name: "payment",
    component: PaymentStack,
    tabBarLabel: "Payment",
    iconName: "money",
    iconType: "font-awesome",
    iconSize: 32,
  },
];

const BottomTabNavigation = () => {
  return (
    <>
      <BottomTab.Navigator tabBarOptions={tabBarOptions}>
        {bottomTabScreens.map((screen, i) => (
          <BottomTab.Screen
            key={`${screen.name}${i}`}
            name={screen.name}
            component={screen.component}
            options={{
              tabBarLabel: screen.tabBarLabel,
              tabBarIcon: ({ color }) => (
                <Icon
                  name={screen.iconName}
                  type={screen.iconType}
                  color={color}
                  size={screen.iconSize}
                />
              ),
            }}
          />
        ))}
      </BottomTab.Navigator>
      <SafeAreaView
        style={{ flex: 0, backgroundColor: COLORS.NEUTRAL.LIGHT }}
      />
    </>
  );
};

export default BottomTabNavigation;
