import { Text, View, ScrollView } from "react-native";
import React from "react";
import CustomListItem from "./CustomListItem";
import { homeData } from "mocks/homeData";
import { styles } from "./style";
import { useUserContext } from "contexts/user";

const HomePage = () => {
  const { state: userState } = useUserContext();

  const MainComponent = () => (
    <View>
      <Text style={styles.header}>{userState?.currentRoom?.roomName}</Text>
      <ScrollView style={styles.listItemContainer}>
        {homeData.map((data, index) => (
          <CustomListItem {...data} key={index} />
        ))}
      </ScrollView>
    </View>
  );

  return (
    <>
      <MainComponent />
    </>
  );
};

export default HomePage;
