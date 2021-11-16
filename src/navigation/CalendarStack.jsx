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
    name: "notice",
    component: Calendar,
    headerHeight: 90,
    headerBg: "white",
    label: "Calendar",
  },
  {
    name: "calendar-settings",
    component: SettingsPage,
    headerHeight: 90,
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
              justifyContent: "center",
            },
            headerStyle: {
              height: screen.headerHeight,
              backgroundColor: screen.headerBg,
              elevation: 0,
              shadowColor: "transparent",
            },
            headerRightContainerStyle: {
              marginRight: 10,
              justifyContent: "center",
            },
            headerLeftContainerStyle: {
              marginLeft: 10,
              justifyContent: "center",
            },
            headerTintColor: COLORS.PRIMARY,
            headerRight:
              screen.name !== "calendar-settings"
                ? () => (
                    <Icon
                      name="cog"
                      type="font-awesome"
                      color={COLORS.PRIMARY}
                      size={24}
                      onPress={() => navigator.navigate("calendar-settings")}
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
