import { Text, View } from "react-native";
import React from "react";
import Layout from "components/Layout";
import { Button } from "react-native-elements";
import CustomListItem from "./CustomListItem";
import { homeData } from "mocks/homeData";
import { styles } from "./style";
import { useUserContext } from "contexts/user";
import CreateRoomModal from "screens/SettingsPage/CreateJoinRoomModal";

const HomePage = () => {
  const { state: userState } = useUserContext();

  const [CreateJoinRoomModal, openCreateJoinRoomModal] = CreateRoomModal();

  const MainComponent = () => (
    <View>
      <Text style={styles.header}>{userState?.currentRoom?.roomName}</Text>
      <View style={styles.listItemContainer}>
        {homeData.map((data, index) => (
          <CustomListItem {...data} key={index} />
        ))}
      </View>
    </View>
  );

  const Fallback = () => (
    <View>
      <Text style={styles.header}>
        {userState?.currentRoom?.roomName || "Join a House"}
      </Text>
      <Button
        title="Create or join a house"
        titleStyle={styles.createRoomButtonTitle}
        buttonStyle={styles.createRoomButton}
        onPress={openCreateJoinRoomModal}
      />
    </View>
  );
  return (
    <>
      <Layout>
        <View>
          {userState?.currentRoom?.roomName ? <MainComponent /> : <Fallback />}
        </View>
      </Layout>
      {CreateJoinRoomModal}
    </>
  );
};

export default HomePage;
