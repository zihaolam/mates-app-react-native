import React, { useState } from "react";
import { ListItem } from "react-native-elements";
import Layout from "components/Layout";
import { Text, View, TextInput } from "react-native";
import { Button } from "react-native-elements";
import useModal from "components/Modal";
import { styles } from "./style";
import { COLORS } from "styles";

const SettingsPage = () => {
  const [errorMsg, setErrorMsg] = useState(false);
  const [invitationCode, setInvitationCode] = useState("");

  const handleJoinRoom = () => {
    console.log("join room");
  };

  const CreateJoinRoomModalContent = (
    <View style={styles.roomPageContainer}>
      <Button
        title="Create a house"
        titleStyle={styles.createRoomButtonTitle}
        buttonStyle={styles.createRoomButton}
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

        <View style={styles.errorContainer}>
          {errorMsg ? (
            <Text style={styles.errorText}>Invalid username or password</Text>
          ) : null}
        </View>
      </View>
    </View>
  );

  const LeaveRoomModalContent = <Text>FUck you</Text>;

  const [CreateJoinRoomModal, openCreateJoinRoomModal] = useModal(
    CreateJoinRoomModalContent
  );

  const [LeaveRoomModal, openLeaveRoomModal] = useModal(LeaveRoomModalContent);

  return (
    <>
      <Layout>
        <ListItem bottomDivider onPress={() => openCreateJoinRoomModal()}>
          <ListItem.Content>
            <ListItem.Title>
              <Text style={styles.listTitle}>Rooms</Text>
            </ListItem.Title>
            <ListItem.Subtitle>
              <Text style={styles.listSubtitle}>Create or join a room</Text>
            </ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider onPress={() => openLeaveRoomModal()}>
          <ListItem.Content>
            <ListItem.Title>
              <Text style={[styles.listTitle, { color: COLORS.DANGER }]}>
                Leave Room
              </Text>
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </Layout>
      {CreateJoinRoomModal}
      {LeaveRoomModal}
    </>
  );
};

export default SettingsPage;
