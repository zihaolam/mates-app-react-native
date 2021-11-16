import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { AmazonEmber } from "styles/typography";
import { COLORS } from "styles";
import { useUserContext } from "contexts/user";

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
    paddingHorizontal: 20,
    paddingVertical: 15,
    // justifyContent: "center",
    // height: "100%",
    position: "relative",
  },
  imgIcon: {
    width: 45,
    height: 45,
    borderRadius: 1000,
  },
  listContent: {
    flex: 1,
  },
  listText1: {
    fontSize: 18,
    fontFamily: AmazonEmber[700],
    marginBottom: 5,
  },
  listText2: {
    fontSize: 14,
    flexShrink: 1,
    fontFamily: AmazonEmber[300],
    flex: 1,
    marginHorizontal: 10,
  },
  toolbar: {
    position: "absolute",
    top: 5,
    right: 2,
  },
  toolbarText: {
    color: COLORS.GRAY,
  },
  listFooter: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listFooterText: {
    fontSize: 12,
    fontFamily: AmazonEmber[700],
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    color: "red",
    fontFamily: AmazonEmber[700],
  },
});

const CustomListItem = ({ title, notes, amount, payees, payTo }) => {
  const { state: userState } = useUserContext();

  const renderPayees = () => {
    const payee = payees.find((payee) => payee === userState.username);
    if (payee) return `${payee} + ${payees.length - 1} other(s)`;
    else return `${payees[0]} + ${payees.length - 1} other(s)`;
  };

  const checkPayee = () => {
    return payees.some((payee) => payee === userState.username);
  };

  return (
    <View style={[styles.listWrapper, { backgroundColor: COLORS.LIGHTPINK }]}>
      <View style={styles.listContainer}>
        <View style={styles.listContent}>
          <Text style={styles.listText1}>{title}</Text>
          <Text style={styles.listText2}>Notes: {notes}</Text>
          <Text style={styles.listText2}>Amount: ${amount}</Text>
        </View>
        <View style={styles.listFooter}>
          <Text style={styles.listFooterText}>Payees: {renderPayees()}</Text>
          <Text style={styles.listFooterText}>Pay To: {payTo}</Text>
        </View>
      </View>
      {checkPayee() ? (
        <View style={styles.toolbar}>
          <Text style={styles.badge}>Due</Text>
        </View>
      ) : null}
    </View>
  );
};

export default CustomListItem;
