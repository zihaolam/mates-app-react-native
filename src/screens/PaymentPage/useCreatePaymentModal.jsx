import React, { useState, useRef } from "react";
import { Text, View, TextInput, Pressable } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";
import { styles } from "./style";
import { useUserContext } from "contexts/user";
import { COLORS, TYPOGRAPHY } from "styles";
import { Modalize } from "react-native-modalize";
import { Dimensions } from "react-native";
import Toast from "react-native-toast-message";
import { users } from "mocks/user";
import { usePaymentContext } from "contexts/payment";
import { Picker } from "@react-native-picker/picker";

const height = Dimensions.get("window").height;

const CreatePaymentModal = () => {
  const modalizeRef = useRef(null);

  const openModal = () => {
    modalizeRef.current?.open();
  };

  const closeModal = () => {
    modalizeRef.current?.close();
  };

  const { state: roomState, dispatch: paymentDispatch } = usePaymentContext();
  const { state: userState, dispatch: userDispatch } = useUserContext();

  const initialState = {
    title: "",
    notes: "",
    amount: null,
    payees: [],
    payTo: "",
  };

  const [formState, setFormState] = useState(initialState);

  const showSuccessToast = () => {
    Toast.show({
      type: "success",
      visibilityTime: 3000,
      text1: "Added Payment",
    });
  };

  const handleSubmitPayment = () => {
    paymentDispatch({
      type: "addPayment",
      payload: formState,
    });
    closeModal();
    showSuccessToast();
  };

  const [currentPage, setCurrentPage] = useState(0);
  const FirstPage = (
    <>
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Title</Text>
        <TextInput
          placeholder="Payment Title"
          style={styles.inputBox}
          autoCapitalize="none"
          value={formState.title}
          onChangeText={(text) => {
            setFormState((formState) => ({
              ...formState,
              title: text,
            }));
          }}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Notes</Text>
        <TextInput
          placeholder="Additional Notes"
          style={styles.inputBox}
          autoCapitalize="none"
          value={formState.notes}
          onChangeText={(text) => {
            setFormState((formState) => ({
              ...formState,
              notes: text,
            }));
          }}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Amount</Text>
        <TextInput
          placeholder="Payment Amount"
          style={styles.inputBox}
          autoCapitalize="none"
          value={formState.amount}
          onChangeText={(text) => {
            setFormState((formState) => ({
              ...formState,
              amount: text,
            }));
          }}
        />
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

  const [selectedMultipleDropdown, setSelectedMultipleDropdown] = useState("");
  const SecondPage = (
    <>
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Pay To</Text>
        <View style={styles.dropdownContainer}>
          <Picker
            selectedValue={formState.payTo}
            onValueChange={(value, index) =>
              setFormState((formState) => ({ ...formState, payTo: value }))
            }
          >
            {users.map((user, index) => (
              <Picker.Item
                key={user.username + index}
                label={user.username}
                value={user.username}
              />
            ))}
          </Picker>
        </View>
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Payee</Text>
        <View style={styles.dropdownContainer}>
          <Picker
            selectedValue={selectedMultipleDropdown}
            onValueChange={(value, index) => {
              setSelectedMultipleDropdown(value);
              const payee = formState.payees.find((payee) => payee === value);
              setFormState((formState) => ({
                ...formState,
                payees: !payee
                  ? [...formState.payees, value]
                  : [...formState.payees],
              }));
            }}
          >
            {users.map((user, index) => (
              <Picker.Item
                key={user.username + index}
                label={user.username}
                value={user.username}
              />
            ))}
          </Picker>
        </View>
        {formState.payees.length ? (
          <View style={styles.dropdownSelected}>
            {formState.payees.map((payee, index) => (
              <Pressable
                key={payee + index}
                onPress={() =>
                  setFormState((formState) => ({
                    ...formState,
                    payees: formState.payees.filter(
                      (payee2) => payee2 !== payee
                    ),
                  }))
                }
              >
                <Text style={styles.dropdownSelectedBadge}>{payee}</Text>
              </Pressable>
            ))}
          </View>
        ) : null}
      </View>
      <View>
        <Button
          title="Submit"
          titleStyle={styles.nextStepButtonTitle}
          buttonStyle={styles.nextStepButton}
          onPress={handleSubmitPayment}
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
      modalHeight={Math.min(height - 150, height * 0.9)}
    >
      <View style={styles.paymentModalContainer}>
        <Text style={styles.addPaymentTitle}>Add a payment</Text>
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

export default CreatePaymentModal;
