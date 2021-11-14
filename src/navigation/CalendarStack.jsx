import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Calendar from "screens/CalendarPage/Calendar";
import { TYPOGRAPHY, COLORS } from "styles";
import SettingsPage from "screens/SettingsPage";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { AmazonEmber } from "styles/typography";

const CalendarStack = createStackNavigator();

const screenOptions = {
  cardStyle: {
    backgroundColor: "white",
  },
  headerTitleStyle: TYPOGRAPHY.HEADER_TITLE,
  headerTitleAlign: "center",
  headerBackTitle: "Back",
};

const calendarStackScreens = [
  {
    name: "calendar",
    component: Calendar,
    headerHeight: 70,
    headerBg: "white",
    label: "Calendar",
  },
  {
    name: "settings",
    component: SettingsPage,
    headerHeight: 70,
    headerBg: "white",
    label: "Settings",
  },
];

const CalendarNavigator = () => {
  const navigator = useNavigation();
  return (
    <CalendarStack.Navigator screenOptions={screenOptions}>
      {calendarStackScreens.map((screen, i) => (
        <CalendarStack.Screen
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
    </CalendarStack.Navigator>
  );
};

export default CalendarNavigator;
