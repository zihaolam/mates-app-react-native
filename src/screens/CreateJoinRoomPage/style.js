import { StyleSheet } from "react-native";
import { AmazonEmber } from "styles/typography";
import { TYPOGRAPHY, COLORS } from "styles";

export const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontFamily: AmazonEmber[900],
    letterSpacing: -0.5,
    textAlign: "center",
    color: COLORS.PRIMARY,
    marginTop: 40
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
  }
});
