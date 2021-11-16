import React, { useState, useRef } from "react";
import { Text, View, TextInput } from "react-native";
import { Button, ListItem, Icon, Overlay } from "react-native-elements";
import { styles } from "../SettingsPage/style";
import { useRoomContext } from "contexts/room";
import { useUserContext } from "contexts/user";
import { COLORS } from "styles";
import { Modalize } from "react-native-modalize";
import { Dimensions } from "react-native";
import Toast from "react-native-toast-message";

const height = Dimensions.get("window").height;

const useCreateJoinRoomModal = () => {
  const modalizeRef = useRef(null);

  const openModal = () => {
    modalizeRef.current?.open();
  };

  const closeModal = () => {
    modalizeRef.current?.close();
  };

  const { state: roomState, dispatch: roomDispatch } = useRoomContext();
  const { dispatch: userDispatch } = useUserContext();

  const [invitationCode, setInvitationCode] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);

  const showSuccessToast = (roomName) => {
    Toast.show({
      type: "success",
      visibilityTime: 3000,
      text1: `Joined ${roomName}`,
    });
  };

  const handleJoinRoom = () => {
    const room = roomState.rooms.find(
      (room) => room.invitationCode === invitationCode
    );
    if (!room) return setErrorMsg(true);
    userDispatch({
      type: "joinRoom",
      payload: room,
    });
    showSuccessToast(room.roomName);
    closeModal();
  };

  const handleJoinRoomWithRoomGiven = (room) => {
    userDispatch({
      type: "joinRoom",
      payload: room,
    });
    showSuccessToast(room.roomName);
    closeModal();
  };

  const [openHouseModal, setOpenHouseModal] = useState(false);
  const [houseName, setHouseName] = useState("");

  const toggleCreateHouseModal = () => {
    setOpenHouseModal(!openHouseModal);
  };

  const addHouse = () => {
    const tempHouseName = houseName;
    roomDispatch({
      type: "addRoom",
      payload: tempHouseName,
    });
    Toast.show({
      type: "success",
      text1: `Sucessfully added ${tempHouseName}`,
    });
    toggleCreateHouseModal();
    setHouseName("");
  };

  const CreateHouseModal = () => (
    <View>
      <Overlay
        isVisible={openHouseModal}
        onBackdropPress={toggleCreateHouseModal}
        overlayStyle={{ borderRadius: 10 }}
      >
        <View style={styles.overlayContainer}>
          <Text style={[styles.leaveRoomModalText]}>Create a House</Text>
          <View>
            <TextInput
              placeholder="House name"
              style={styles.inputBox}
              textAlign="center"
              // multiline
              autoCapitalize="none"
              value={houseName}
              onChangeText={(text) => {
                setHouseName(text);
              }}
              onSubmitEditing={addHouse}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <Button
              title="Create"
              buttonStyle={styles.createButton}
              titleStyle={styles.createButtonTitle}
              onPress={addHouse}
            />
          </View>
        </View>
      </Overlay>
    </View>
  );

  return [
    <Modalize
      ref={modalizeRef}
      modalHeight={Math.max(height - 100, height * 0.8)}
    >
      {CreateHouseModal()}
      <View style={styles.roomPageContainer}>
        <Button
          title="Create a house"
          titleStyle={styles.createRoomButtonTitle}
          buttonStyle={styles.createRoomButton}
          onPress={toggleCreateHouseModal}
        />
        <Text style={styles.joinHouseTitle}>Join a house</Text>
        <View style={styles.inputContainer}>
          <View style={styles.joinHouseTextInputContainer}>
            <TextInput
              placeholder="Invitation Code"
              style={styles.inputBox}
              textAlign="center"
              autoCapitalize="none"
              value={invitationCode}
              onChangeText={(text) => {
                setInvitationCode(text);
                setErrorMsg(false);
              }}
              onSubmitEditing={handleJoinRoom}
            />
            <Button
              title="Join"
              buttonStyle={styles.joinButton}
              titleStyle={styles.joinButtonTitle}
              onPress={handleJoinRoom}
            />
          </View>

          {errorMsg ? (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>Room does not exist</Text>
            </View>
          ) : null}

          <View style={{ marginTop: 15 }}>
            <Text style={styles.listHeader}>Rooms nearby you</Text>
            {roomState.rooms.map((room) => (
              <ListItem bottomDivider key={room.id}>
                <ListItem.Content>
                  <ListItem.Title>
                    <Text style={styles.listTitle}>{room.roomName}</Text>
                  </ListItem.Title>
                </ListItem.Content>
                <Icon
                  name="arrow-right"
                  type="feather"
                  color={COLORS.PRIMARY}
                  onPress={() => handleJoinRoomWithRoomGiven(room)}
                />
              </ListItem>
            ))}
          </View>
        </View>
      </View>
    </Modalize>,
    openModal,
    closeModal,
  ];
};

export default useCreateJoinRoomModal;
