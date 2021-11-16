import React, { useState } from "react";
import { ListItem } from "react-native-elements";
import Layout from "components/Layout";
import { Text } from "react-native";
import { styles } from "./style";
import { COLORS } from "styles";
import { useUserContext } from "contexts/user";
import LeaveRoomModal from "./LeaveRoomModal";
import useCreateJoinRoomModal from "../CreateJoinRoomPage/useCreateJoinRoomModal";

const SettingsPage = () => {
  const [leaveRoomModalVisible, setLeaveRoomModalVisible] = useState(false);
  const { state: userState } = useUserContext();

  const [CreateJoinRoomModal, openCreateJoinRoomModal] =
    useCreateJoinRoomModal();

  const toggleLeaveRoomModal = () => {
    setLeaveRoomModalVisible(!leaveRoomModalVisible);
  };

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
        {userState.hasRoom && (
          <ListItem bottomDivider onPress={toggleLeaveRoomModal}>
            <ListItem.Content>
              <ListItem.Title>
                <Text style={[styles.listTitle, { color: COLORS.DANGER }]}>
                  Leave Room
                </Text>
              </ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        )}
      </Layout>
      {CreateJoinRoomModal}
      <LeaveRoomModal
        toggleOverlay={toggleLeaveRoomModal}
        leaveRoomModalVisible={leaveRoomModalVisible}
      />
    </>
  );
};

export default SettingsPage;
