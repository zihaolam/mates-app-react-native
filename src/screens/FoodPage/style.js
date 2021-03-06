import { Dimensions, StyleSheet } from "react-native";
import { COLORS, TYPOGRAPHY } from "styles";
import { AmazonEmber } from "styles/typography";

const screenWidth = Dimensions.get('window').width;

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
    marginHorizontal: 10,
    marginBottom: 30,
  },
  bottomToolbar: {
    borderRadius: 9999,
    position: "absolute",
    bottom: 20,
    right: 7,
    zIndex: 9999
  },paymentModalContainer: {
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  inputGroup: {
    paddingVertical: 10,
    // flexShrink: 1
    // flexGrow: 0,
    justifyContent: "center",
  },
  inputLabel: {
    fontFamily: AmazonEmber[700],
    fontSize: 18,
    marginBottom: 5,
    marginLeft: 3,
  },
  inputBox: {
    height: 45,
    borderWidth: 1,
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
  inputPicker: {
    height: 45,
    borderWidth: 1,
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
    width: 250,
  },
  nextStepButtonTitle: {
    ...TYPOGRAPHY.BUTTON_SMALL,
    fontSize: 20,
  },
  nextStepButton: {
    borderRadius: 10,
    paddingVertical: 7,
    width: "100%",
    backgroundColor: COLORS.PRIMARY,
    marginTop: 20,
  },
  backButton: {
    borderRadius: 10,
    paddingVertical: 7,
    width: "100%",
    backgroundColor: COLORS.GRAY,
    marginTop: 8,
  },
  backButtonTitle: {
    ...TYPOGRAPHY.BUTTON_SMALL,
    fontSize: 20,
  },
  createRoomModalText: {
    ...TYPOGRAPHY.H3,
    textAlign: "center",
    marginBottom: 20,
  },
  dropdownContainer: {
    marginTop: 8,
    width: "250",
    paddingHorizontal: 10,
  },
  dropdownLabel: {
    ...TYPOGRAPHY.BODY_MEDIUM,
    marginLeft: 3,
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
    marginTop: 15,
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  bottomToolbar: {
    borderRadius: 9999,
    position: "absolute",
    bottom: 20,
    right: 7,
  },
  addPaymentTitle: {
    color: COLORS.PRIMARY,
    fontSize: 30,
    marginTop: 20,
    fontFamily: AmazonEmber[900],
  },
  inputContainer: {
    marginBottom: 20,
    marginTop: 15,
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
  joinButton: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: COLORS.PRIMARY,
    marginLeft: 8,
  },
  joinButtonTitle: {
    fontSize: 20,
    fontFamily: AmazonEmber[700],
  },
  createButton: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 6,
    backgroundColor: COLORS.PRIMARY,
    // width: 250
  },
  createButtonTitle: {
    fontSize: 20,
    fontFamily: AmazonEmber[700],
  },
  textInputContainer: {
    justifyContent: "center",
    marginVertical: 20,
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
  listHeader: {
    fontSize: 24,
    fontFamily: AmazonEmber[700],
    textAlign: "center",
    color: COLORS.PRIMARY,
    marginBottom: 5,
  },
  listTitle: {
    fontFamily: AmazonEmber[700],
  },
  dropdownContainer: {
    borderRadius: 15,
    height: 45,
    borderWidth: 1,
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
    justifyContent: "center",
    width: 250,
  },
  dropdownSelected: {
    borderRadius: 15,
    borderWidth: 1,
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
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
    maxWidth: 250,
  },
  dropdownSelectedBadge: {
    fontSize: 10,
    fontFamily: AmazonEmber[500],
    backgroundColor: "#eeeeee",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 6,
    marginHorizontal: 3,
    marginVertical: 2,
  },
  showDateButton: {
    borderRadius: 10,
    backgroundColor: COLORS.GRAY,
    marginTop: 5,
    paddingVertical: 5
  },
  showDateButtonTitle: {
    fontSize: 15,
    fontFamily: AmazonEmber[500],
  }
});
