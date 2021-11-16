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
    name: "payment",
    component: PaymentPage,
    headerHeight: 50,
    headerBg: "white",
    label: "",
  },
  {
    name: "payment-settings",
    component: SettingsPage,
    headerHeight: 90,
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
            // headerTransparent: true,
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
              screen.name !== "payment-settings"
                ? () => (
                    <Icon
                      name="cog"
                      type="font-awesome"
                      color={COLORS.PRIMARY}
                      size={24}
                      onPress={() => navigator.navigate("payment-settings")}
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
