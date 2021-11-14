import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import PaymentPage from "screens/PaymentPage";
import { Icon } from "react-native-elements";
import SettingsPage from "screens/SettingsPage";
import { TYPOGRAPHY, COLORS } from "styles";
import { useNavigation } from "@react-navigation/core";
import { AmazonEmber } from "styles/typography";

const PaymentStack = createStackNavigator();

const screenOptions = {
  cardStyle: {
    backgroundColor: "white",
  },
  headerTitleStyle: TYPOGRAPHY.HEADER_TITLE,
  headerTitleAlign: "center",
  headerBackTitle: "Back",
};

const paymentStackScreens = [
  {
    name: "payment-list",
    component: PaymentPage,
    headerHeight: 70,
    headerBg: "white",
    label: "Payment",
  },
  {
    name: "settings",
    component: SettingsPage,
    headerHeight: 70,
    headerBg: "white",
    label: "Settings",
  },
];

const PaymentNavigator = () => {
  const navigator = useNavigation();

  return (
    <PaymentStack.Navigator screenOptions={screenOptions}>
      {paymentStackScreens.map((screen, i) => (
        <PaymentStack.Screen
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
    </PaymentStack.Navigator>
  );
};

export default PaymentNavigator;
