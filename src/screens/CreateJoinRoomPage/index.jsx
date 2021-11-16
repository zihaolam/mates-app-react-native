import { Text } from "react-native";
import React from "react";
import Layout from "components/Layout";
import { Button } from "react-native-elements";
import { styles } from "./style";
import useCreateJoinRoomModal from "screens/CreateJoinRoomPage/useCreateJoinRoomModal";

const CreateJoinRoomPage = () => {
  const [CreateJoinRoomModal, openCreateJoinRoomModal] =
    useCreateJoinRoomModal();

  const Fallback = () => (
    <Layout>
      <Text style={styles.header}>You have not joined a house</Text>
      <Button
        title="Create or join a house"
        titleStyle={styles.createRoomButtonTitle}
        buttonStyle={styles.createRoomButton}
        onPress={openCreateJoinRoomModal}
      />
    </Layout>
  );

  return (
    <>
      <Fallback />
      {CreateJoinRoomModal}
    </>
  );
};

export default CreateJoinRoomPage;
