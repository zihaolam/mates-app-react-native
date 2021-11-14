import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import LoginPage from "screens/AuthenticationPage/LoginPage";
import SignupPage from "screens/AuthenticationPage/SignupPage";
import { COLORS, TYPOGRAPHY } from "styles";

const AuthenticationStack = createStackNavigator();

const screenOptions = {
  cardStyle: {
    backgroundColor: "white",
  },
  headerTitleStyle: TYPOGRAPHY.HEADER_TITLE,
  headerTitleAlign: "center",
  headerBackTitle: "Back",
};

const authenticationStackScreen = [
  {
    name: "login",
    component: LoginPage,
    headerHeight: 0,
    headerBg: "white",
  },
  {
    name: "signup",
    component: SignupPage,
    headerHeight: 50,
    headerBg: "white",
  },
];

const AuthenticationNavigator = () => {
  const navigator = useNavigation();

  return (
    <AuthenticationStack.Navigator screenOptions={screenOptions}>
      {authenticationStackScreen.map((screen, i) => (
        <AuthenticationStack.Screen
          key={`feed-stack${i}`}
          name={screen.name}
          component={screen.component}
          options={{
            title: "",
            headerStyle: {
              height: screen.headerHeight,
              backgroundColor: screen.headerBg,
              elevation: 0,
              shadowColor: "transparent",
            },
            headerTintColor: "black",
          }}
        />
      ))}
    </AuthenticationStack.Navigator>
  );
};

export default AuthenticationNavigator;
