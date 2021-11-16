import React from "react";
import { colorMap } from "mocks/homeData";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { AmazonEmber } from "styles/typography";
import { timeSince } from "utilities/timeSince";
import { COLORS } from "styles";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  listWrapper: {
    marginVertical: 10,
    borderRadius: 15,
    // height: 80,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: "center",
    // height: "100%",
    position: "relative",
  },
  imgIcon: {
    width: 45,
    height: 45,
    borderRadius: 1000,
  },
  listContent: {
    marginHorizontal: 10,
    flexDirection: "row",
  },
  listText1: {
    fontSize: 18,
    fontFamily: AmazonEmber[700],
  },
  listText: {
    justifyContent: "center",
    // alignItems: "center",
    marginLeft: 15,
    flex: 1,
  },
  listText2: {
    fontSize: 18,
    flexShrink: 1,
    flex: 1,
  },
  toolbar: {
    position: "absolute",
    top: 5,
    right: 10,
  },
  toolbarText: {
    color: COLORS.GRAY,
  },
});

const CustomListItem = ({ type, text, postedBy, createdAt }) => {
  const navigator = useNavigation();

  return (
    <Pressable
      onPress={() => navigator.navigate(type)}
      style={[styles.listWrapper, { backgroundColor: colorMap[type] }]}
    >
      <View style={styles.listContainer}>
        <View style={styles.listContent}>
          <Image
            style={styles.imgIcon}
            source={{
              uri: `https://via.placeholder.com/40.jpg?text=${postedBy.substr(
                0,
                2
              )}`,
            }}
          />
          <View style={styles.listText}>
            <Text style={styles.listText1}>{postedBy}</Text>
            <Text style={styles.listText2}>{text}</Text>
          </View>
        </View>
        <View style={styles.toolbar}>
          <Text style={styles.toolbarText}>{timeSince(createdAt)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CustomListItem;
