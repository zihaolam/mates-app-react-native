import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import CreateJoinRoomPage from "screens/CreateJoinRoomPage";
import React from "react";
import AuthenticationStack from "./AuthenticationStack";
import { useUserContext } from "contexts/user";

const RootStack = createStackNavigator();

const RootNavigator = () => {
  const { state: userState } = useUserContext();

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {userState.isAuthenticated ? (
        userState.hasRoom ? (
          <RootStack.Screen name="bottom-tab" component={BottomTab} />
        ) : (
          <RootStack.Screen
            name="create-join-room"
            component={CreateJoinRoomPage}
          />
        )
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
