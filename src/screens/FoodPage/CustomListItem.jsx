import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";
import { AmazonEmber } from "styles/typography";
import { COLORS } from "styles";
import NumericInput from "react-native-numeric-input";
import { useFoodContext } from "contexts/food";
import Toast from "react-native-toast-message";

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
    marginHorizontal: 10,
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
  listText1: {
    fontSize: 18,
    fontFamily: AmazonEmber[700],
  },
  listText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 15,
    marginBottom: 10,
  },
  listText2: {
    fontSize: 10,
    marginRight: 5,
  },
  toolbar: {
    position: "absolute",
    bottom: 5,
    left: 20,
  },
  toolbarText: {
    color: COLORS.GRAY,
    fontSize: 10,
    flex: 1,
  },
  buttonToolbar: {
    position: "absolute",
    bottom: 5,
    right: 5,
    flexDirection: "row",
  },
  saveButton: {
    backgroundColor: COLORS.DARKGREEN,
    borderRadius: 15,
    paddingHorizontal: 5,
    paddingVertical: 2,
    width: 35,
    marginLeft: 1,
  },
  resetButton: {
    backgroundColor: COLORS.GRAY,
    borderRadius: 15,
    paddingHorizontal: 5,
    paddingVertical: 2,
    width: 35,
  },
  saveButtonTitle: {
    fontSize: 10,
    fontFamily: AmazonEmber[700],
  },
});

const CustomListItem = ({ id, name, quantity, quantityUnit, expiryDate }) => {
  const { dispatch: foodDispatch } = useFoodContext();

  const initialState = { id, name, quantity, quantityUnit, expiryDate };
  const [updatedQuantity, setUpdatedQuantity] = useState(initialState.quantity);

  const save = () => {
    foodDispatch({
      type: "updateFood",
      payload: { ...initialState, quantity: updatedQuantity },
    });
    Toast.show({
      type: "success",
      visibilityTime: 2000,
      text1: `Updated ${name}`,
    });
  };

  const reset = () => {
    setUpdatedQuantity(initialState.quantity);
  };

  return (
    <View style={[styles.listWrapper, { backgroundColor: COLORS.GREEN }]}>
      <View style={styles.listContainer}>
        <View style={styles.listText}>
          <Text style={styles.listText1}>{name}</Text>
          <View
            style={{
              justifyContent: "center",
            }}
          >
            <NumericInput
              value={parseInt(updatedQuantity)}
              onChange={(value) => setUpdatedQuantity(value)}
              rounded
              minValue={0}
            />
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Text style={styles.listText2}>{quantityUnit}</Text>
            </View>
          </View>
        </View>
        <View style={styles.toolbar}>
          <Text style={styles.toolbarText}>
            Expiry Date: {new Date(expiryDate).toDateString()}
          </Text>
        </View>
        {updatedQuantity !== initialState.quantity ? (
          <View style={styles.buttonToolbar}>
            <Button
              title="reset"
              titleStyle={styles.saveButtonTitle}
              buttonStyle={styles.resetButton}
              onPress={reset}
            />
            <Button
              title="save"
              titleStyle={styles.saveButtonTitle}
              buttonStyle={styles.saveButton}
              onPress={save}
            />
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default CustomListItem;
