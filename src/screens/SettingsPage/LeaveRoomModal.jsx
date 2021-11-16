import { View, Text } from "react-native";
import React from "react";
import { Overlay, Button } from "react-native-elements";
import { styles } from "./style";
import { useUserContext } from "contexts/user";
import Toast from "react-native-toast-message";

const LeaveRoomModal = ({ toggleOverlay, leaveRoomModalVisible }) => {
  const { dispatch: userDispatch } = useUserContext();

  const leaveRoom = () => {
    userDispatch({
      type: "leaveRoom",
      payload: null,
    });
    Toast.show({
      type: "success",
      text1: "Left Room Successfully",
      duration: 3000,
    });
    toggleOverlay();
  };

  return (
    <View>
      <Overlay
        isVisible={leaveRoomModalVisible}
        onBackdropPress={toggleOverlay}
        overlayStyle={{ borderRadius: 10 }}
      >
        <View style={styles.overlayContainer}>
          <Text style={styles.leaveRoomModalText}>
            Are you sure you want to leave room?
          </Text>
          <View style={styles.leaveRoomButtonContainer}>
            <Button
              title="Confirm"
              titleStyle={styles.leaveRoomYesButtonTitle}
              buttonStyle={styles.leaveRoomYesButton}
              onPress={leaveRoom}
            />
            <Button
              title="Cancel"
              titleStyle={styles.leaveRoomNoButtonTitle}
              buttonStyle={styles.leaveRoomNoButton}
              onPress={toggleOverlay}
            />
          </View>
        </View>
      </Overlay>
    </View>
  );
};

export default LeaveRoomModal;
