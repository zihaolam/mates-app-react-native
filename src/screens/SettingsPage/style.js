import { Dimensions, StyleSheet } from "react-native";
import { AmazonEmber } from "styles/typography";
import { TYPOGRAPHY, COLORS } from "styles";

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  listTitle: {
    fontFamily: AmazonEmber[700],
  },
  listSubtitle: { ...TYPOGRAPHY.BODY_SMALL, color: "#6C757D" },
  roomPageContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: 'center'
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
    marginBottom: 50,
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
    marginLeft: 8
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
    width: 250
  },
  createButtonTitle: {
    fontSize: 20,
    fontFamily: AmazonEmber[700],
  },
  joinHouseTextInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  overlayContainer: {
    borderRadius: 10,
    width: 0.8*screenWidth,
    alignItems: 'center',
    paddingVertical: 20
  },
  leaveRoomButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  }, 
  leaveRoomModalText: {
    ...TYPOGRAPHY.H3,
    textAlign: 'center',
    marginBottom: 20
  },
  leaveRoomYesButton: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 7,
    backgroundColor: COLORS.DANGER,
    marginHorizontal: 5,
  },
  leaveRoomYesButtonTitle: {
    ...TYPOGRAPHY.BUTTON_SMALL,
    fontSize: 20, 
  },
  leaveRoomNoButtonTitle: {
    ...TYPOGRAPHY.BUTTON_SMALL,
    fontSize: 20,
    color: COLORS.DARKBLUE
  },
  leaveRoomNoButton: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 7,  
    backgroundColor: COLORS.SECONDARY,
    marginHorizontal: 5,
  },
  listHeader: {
    fontSize: 24,
    fontFamily: AmazonEmber[700],
    textAlign: 'center',
    color: COLORS.PRIMARY,
    marginBottom: 5
  }
});
