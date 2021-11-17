import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { AmazonEmber } from "styles/typography";
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
    position: "relative",
  },
  listContent: {
    marginHorizontal: 10,
  },
  listText: {
    marginLeft: 8,
    flex: 1,
  },
  todoBy: {
    fontSize: 18,
    fontFamily: AmazonEmber[700],
  },
  todoContent: {
    fontSize: 16,
    flexShrink: 1,
    flex: 1,
    fontFamily: AmazonEmber[300],
  },
  listFooter: {
    marginHorizontal: 20,
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listFooterText: {
    fontSize: 13,
    fontFamily: AmazonEmber[700],
  },
});

const CustomListItemToDo = ({ title, content, assignedTo, assignedBy }) => {
  return (
    <View style={[styles.listWrapper, { backgroundColor: COLORS.PURPLE }]}>
      <View style={styles.listContainer}>
        <View style={styles.listContent}>
          <View style={styles.listText}>
            <Text style={styles.todoBy}>{title}</Text>
            <Text style={styles.todoContent}>{content}</Text>
          </View>
        </View>
        <View style={styles.listFooter}>
          <Text style={styles.listFooterText}>Assigned by: {assignedBy}</Text>
          <Text style={styles.listFooterText}>Assigned to: {assignedTo}</Text>
        </View>
      </View>
    </View>
  );
};

export default CustomListItemToDo;
