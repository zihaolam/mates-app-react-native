import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import React from "react";
import AuthenticationStack from "./AuthenticationStack";
import { useUserContext } from "contexts/user";

const RootStack = createStackNavigator();

const RootNavigator = () => {
  const { state } = useUserContext();

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {state.isAuthenticated ? (
        <RootStack.Screen name="bottom-tab" component={BottomTab} />
      ) : (
        <RootStack.Screen
          name="authentication"
          component={AuthenticationStack}
        />
      )}
    </RootStack.Navigator>
  );
};

export default RootNavigator;
