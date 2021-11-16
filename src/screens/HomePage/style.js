import { StyleSheet } from "react-native";
import { COLORS } from "styles";
import { AmazonEmber } from "styles/typography";


export const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontFamily: AmazonEmber[900],
    letterSpacing: -0.5,
    textAlign: "center",
    color: COLORS.PRIMARY,
  },
  listItemContainer: {
    marginTop: 15,
    paddingHorizontal: 10,
    marginBottom: 30,
  }
});
