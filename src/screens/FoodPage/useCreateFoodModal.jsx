import React, { useState, useRef } from "react";
import { Text, View, TextInput, Platform, Keyboard } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";
import { styles } from "./style";
import { useUserContext } from "contexts/user";
import { Modalize } from "react-native-modalize";
import { Dimensions } from "react-native";
import Toast from "react-native-toast-message";
import { users } from "mocks/user";
import { Picker } from "@react-native-picker/picker";
import { useFoodContext } from "contexts/food";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TouchableOpacity } from "react-native-gesture-handler";

const height = Dimensions.get("window").height;

const CreateFoodModal = () => {
  const [show, setShow] = useState(false);
  const modalizeRef = useRef(null);

  const openModal = () => {
    modalizeRef.current?.open();
  };

  const closeModal = () => {
    modalizeRef.current?.close();
  };

  const { dispatch: foodDispatch } = useFoodContext();

  const quantityOptions = [
    { label: "bottle(s)", value: "bottle(s)" },
    { label: "litre(s)", value: "litre(s)" },
    { label: "kilogram(s)", value: "kg(s)" },
    { label: "piece(s)", value: "pc(s)" },
  ];

  const initialState = {
    name: "",
    quantity: "",
    quantityUnit: quantityOptions[0].value,
    expiryDate: new Date(),
  };

  const [formState, setFormState] = useState(initialState);

  const showSuccessToast = () => {
    Toast.show({
      type: "success",
      visibilityTime: 3000,
      text1: "Added Food",
    });
  };

  const handleSubmitFood = () => {
    foodDispatch({
      type: "addFood",
      payload: formState,
    });
    closeModal();
    setCurrentPage(0);
    setFormState(initialState);
    showSuccessToast();
  };

  const setDate = (event, selectedDate) => {
    const currentDate = selectedDate || formState.expiryDate;
    setShow(Platform.OS === "ios");
    setFormState((state) => ({ ...state, expiryDate: currentDate }));
  };

  const [currentPage, setCurrentPage] = useState(0);
  const FirstPage = (
    <>
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Name</Text>
        <TextInput
          placeholder="Food Name"
          style={styles.inputBox}
          autoCapitalize="none"
          value={formState.name}
          onChangeText={(text) => {
            setFormState((formState) => ({
              ...formState,
              name: text,
            }));
          }}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Expiry Date</Text>
        <TextInput
          style={styles.inputBox}
          onFocus={() => {
            Keyboard.dismiss();
            setShow(true);
          }}
          value={new Date(formState.expiryDate).toDateString()}
        />
        {/* <Button
          onPress={() => setShow(true)}
          buttonStyle={styles.showDateButton}
          titleStyle={styles.showDateButtonTitle}
          title="Pick date"
        /> */}
        {show ? (
          <DateTimePicker
            testID="dateTimePicker"
            value={formState.expiryDate}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={setDate}
          />
        ) : null}
      </View>

      <View>
        <Button
          title="Next Step"
          titleStyle={styles.nextStepButtonTitle}
          buttonStyle={styles.nextStepButton}
          onPress={() => setCurrentPage(1)}
        />
      </View>
    </>
  );

  const SecondPage = (
    <>
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Quantity</Text>
        <TextInput
          placeholder="Quantity of Food"
          style={styles.inputBox}
          autoCapitalize="none"
          value={formState.quantity}
          onChangeText={(text) => {
            setFormState((formState) => ({
              ...formState,
              quantity: text,
            }));
          }}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Quantity Unit</Text>
        <View style={styles.dropdownContainer}>
          <Picker
            selectedValue={formState.quantityUnit}
            onValueChange={(value, index) => {
              setFormState((state) => ({ ...state, quantityUnit: value }));
              console.log(value);
            }}
          >
            {quantityOptions.map((qty, index) => (
              <Picker.Item
                key={qty.value + index}
                label={qty.label}
                value={qty.value}
              />
            ))}
          </Picker>
        </View>
      </View>
      <View>
        <Button
          title="Submit"
          titleStyle={styles.nextStepButtonTitle}
          buttonStyle={styles.nextStepButton}
          onPress={handleSubmitFood}
        />
        <Button
          title="Back"
          titleStyle={styles.backButtonTitle}
          buttonStyle={styles.backButton}
          onPress={() => setCurrentPage(0)}
        />
      </View>
    </>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 0:
        return FirstPage;
      case 1:
        return SecondPage;
    }
  };

  return [
    <Modalize
      ref={modalizeRef}
      modalHeight={Math.min(height - 150, height * 0.8)}
    >
      <View style={styles.paymentModalContainer}>
        <Text style={styles.addPaymentTitle}>Add a food</Text>
        <View style={styles.textInputContainer}>
          {renderCurrentPage()}
          {/* {SecondPage} */}
          {/* <Button
              title="Join"
              buttonStyle={styles.joinButton}
              titleStyle={styles.joinButtonTitle}
              onPress={handleJoinRoom}
            /> */}
        </View>
      </View>
    </Modalize>,
    openModal,
    closeModal,
  ];
};

export default CreateFoodModal;
