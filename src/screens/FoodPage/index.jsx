import { Text, View, ScrollView } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import CustomListItem from "./CustomListItem";
import { styles } from "./style";
import { COLORS } from "styles";
import { useFoodContext } from "contexts/food";
import useCreateFoodModal from "./useCreateFoodModal";

const HomePage = () => {
  const { state: foodState } = useFoodContext();
  const [CreateFoodModal, openCreateFoodModal] = useCreateFoodModal();

  return (
    <>
      <View>
        <Text style={styles.header}>Food Tracker</Text>
        <ScrollView style={styles.listItemContainer}>
          {foodState.allFood.map((data, index) => (
            <CustomListItem {...data} key={index} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.bottomToolbar}>
        <Icon
          name="add-circle"
          type="material"
          size={40}
          color={COLORS.PRIMARY}
          onPress={openCreateFoodModal}
        />
      </View>
      {CreateFoodModal}
    </>
  );
};

export default HomePage;
