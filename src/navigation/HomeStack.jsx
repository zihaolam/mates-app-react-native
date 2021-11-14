import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Icon } from "react-native-elements";
import HomePage from "screens/HomePage";
import SettingsPage from "screens/SettingsPage";
import { TYPOGRAPHY, COLORS } from "styles";
import { useNavigation } from "@react-navigation/native";
import { AmazonEmber } from "styles/typography";

const HomeStack = createStackNavigator();

const screenOptions = {
  cardStyle: {
    backgroundColor: "white",
  },
  headerTitleStyle: TYPOGRAPHY.HEADER_TITLE,
  headerTitleAlign: "center",
  headerBackTitle: "Back",
};

const homeStackScreens = [
  {
    name: "home",
    component: HomePage,
    headerHeight: 70,
    headerBg: "white",
    label: "Home",
  },
  {
    name: "settings",
    component: SettingsPage,
    headerHeight: 70,
    headerBg: "white",
    label: "Settings",
  },
];

const HomeNavigator = () => {
  const navigator = useNavigation();
  return (
    <HomeStack.Navigator screenOptions={screenOptions}>
      {homeStackScreens.map((screen, i) => (
        <HomeStack.Screen
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
              screen.name !== "settings"
                ? () => (
                    <Icon
                      name="cog"
                      type="font-awesome"
                      color={COLORS.PRIMARY}
                      size={24}
                      onPress={() => navigator.navigate("settings")}
                      style={{ marginRight: 12 }}
                    />
                  )
                : undefined,
          }}
        />
      ))}
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
