import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { TYPOGRAPHY, COLORS } from "styles";
import { Icon } from "react-native-elements";
import FoodPage from "screens/FoodPage";
import SettingsPage from "screens/SettingsPage";
import { useNavigation } from "@react-navigation/core";
import { AmazonEmber } from "styles/typography";

const FoodStack = createStackNavigator();

const screenOptions = {
  cardStyle: {
    backgroundColor: "white",
  },
  headerTitleStyle: TYPOGRAPHY.HEADER_TITLE,
  headerTitleAlign: "center",
  headerBackTitle: "Back",
};

const foodStackScreens = [
  {
    name: "food",
    component: FoodPage,
    headerHeight: 90,
    headerBg: "white",
    label: "",
  },
  {
    name: "food-settings",
    component: SettingsPage,
    headerHeight: 90,
    headerBg: "white",
    label: "Settings",
  },
];

const FoodNavigator = () => {
  const navigator = useNavigation();

  return (
    <FoodStack.Navigator screenOptions={screenOptions}>
      {foodStackScreens.map((screen, i) => (
        <FoodStack.Screen
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
              screen.name !== "food-settings"
                ? () => (
                    <Icon
                      name="cog"
                      type="font-awesome"
                      color={COLORS.PRIMARY}
                      size={24}
                      onPress={() => navigator.navigate("food-settings")}
                      style={{ marginRight: 12 }}
                    />
                  )
                : undefined,
          }}
        />
      ))}
    </FoodStack.Navigator>
  );
};

export default FoodNavigator;
