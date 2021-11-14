import { StyleSheet } from "react-native";
import { COLORS, TYPOGRAPHY } from "styles";
import { AmazonEmber } from "styles/typography";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    fontFamily: AmazonEmber[900],
    letterSpacing: -0.5,
    textAlign: "center",
    color: COLORS.PRIMARY,
  },
  inputBox: {
    height: 45,
    borderWidth: 1,
    width: 250,
    borderColor: "white",
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    fontSize: 18,
    fontFamily: AmazonEmber[400],
  },
  createRoomButtonTitle: {
    ...TYPOGRAPHY.BUTTON_SMALL,
    fontSize: 20,
  },
  createRoomButton: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 7,
    backgroundColor: COLORS.PRIMARY,
    marginHorizontal: 5,
    marginTop: 50,
    marginBottom: 100,
  },
  createRoomModalText: {
    ...TYPOGRAPHY.H3,
    textAlign: "center",
    marginBottom: 20,
  },
  createButton: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 6,
    backgroundColor: COLORS.PRIMARY,
    width: 250,
  },
  createButtonTitle: {
    fontSize: 20,
    fontFamily: AmazonEmber[700],
  },
  overlayContainer: {
    borderRadius: 10,
    width: 0.8 * screenWidth,
    alignItems: "center",
    paddingVertical: 20,
  },
  listItemContainer: {
    marginTop: 15
  }
});
