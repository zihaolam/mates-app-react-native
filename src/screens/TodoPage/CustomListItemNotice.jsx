import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { AmazonEmber } from "styles/typography";
import { timeSince } from "utilities/timeSince";
import { COLORS } from "styles";

const styles = StyleSheet.create({
  listWrapper: {
    marginVertical: 10,
    borderRadius: 15,
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

  listText: {
    justifyContent: "center",
    marginLeft: 15,
    flex: 1,
  },
  noticeBy: {
    fontSize: 18,
    fontFamily: AmazonEmber[700],
  },
  noticeContent: {
    fontSize: 17,
    flexShrink: 1,
    flex: 1,
  },
  toolbar: {
    position: "absolute",
    bottom: 5,
    right: 10,
  },
  toolbarText: {
    color: COLORS.GRAY,
  },
});

const CustomListItemNotice = ({ text, postedBy, createdAt }) => {
  // const { state: userState } = useUserContext();
  return (
    <View style={[styles.listWrapper, { backgroundColor: COLORS.BLUE }]}>
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
            <Text style={styles.noticeBy}>{postedBy}</Text>
            <Text style={styles.noticeContent}>{text}</Text>
          </View>
        </View>
        <View style={styles.toolbar}>
          <Text style={styles.toolbarText}>{timeSince(createdAt)}</Text>
        </View>
      </View>
    </View>
  );
};

export default CustomListItemNotice;
