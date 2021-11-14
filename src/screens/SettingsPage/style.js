import { StyleSheet } from "react-native";
import { AmazonEmber } from "styles/typography";
import { TYPOGRAPHY, COLORS } from "styles";

export const styles = StyleSheet.create({
  listTitle: {
    fontFamily: AmazonEmber[700],
  },
  listSubtitle: { ...TYPOGRAPHY.BODY_SMALL, color: "#6C757D" },
  roomPageContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: "center",
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
  joinHouseTitle: {
    color: COLORS.PRIMARY,
    fontSize: 30,
    fontFamily: AmazonEmber[700],
  },
  inputContainer: {
    marginBottom: 20,
    marginTop: 15,
  },
  inputBox: {
    height: 45,
    borderWidth: 1,
    width: 200,
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
  joinButton: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: COLORS.PRIMARY,
    marginLeft: 8
  },
  joinButtonTitle: {
    fontSize: 20,
    fontFamily: AmazonEmber[700],
  },
  joinHouseTextInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 10,
    height: 30,
  },
  errorText: {
    ...TYPOGRAPHY.BODY_MEDIUM,
    color: COLORS.DANGER,
  },
});
