import React, { useState, useRef } from "react";
import { Text, View, TextInput } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";
import { styles } from "./style";
import { Modalize } from "react-native-modalize";
import { Dimensions } from "react-native";
import { users } from "mocks/user";
import { Picker } from "@react-native-picker/picker";
import { useNoticeContext } from "contexts/notice";
import Toast from "react-native-toast-message";

const height = Dimensions.get("window").height;

const CreateNoticeModal = () => {
  const initialState = {
    content: "",
    postedBy: "",
    createdAt: new Date(),
  };

  const [formState, setFormState] = useState(initialState);

  const { state: noticeState, dispatch: noticeDispatch } = useNoticeContext();

  const modalizeRef = useRef(null);

  const openModal = () => {
    modalizeRef.current?.open();
  };

  const closeModal = () => {
    modalizeRef.current?.close();
  };

  const showSuccessToast = () => {
    Toast.show({
      type: "success",
      visibilityTime: 3000,
      text1: "Added Notice",
    });
  };

  const handleSubmitNotice = () => {
    noticeDispatch({
      type: "addNotice",
      payload: formState,
    });
    closeModal();
    showSuccessToast();
  };

  return [
    <Modalize
      ref={modalizeRef}
      modalHeight={Math.min(height - 150, height * 0.9)}
    >
      <View style={styles.TodoModalContainer}>
        <Text style={styles.addTodoTitle}>Add a notice</Text>
        <View style={styles.textInputContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>New Notice</Text>
            <TextInput
              placeholder="Notice Content"
              style={styles.inputBox}
              autoCapitalize="none"
              value={formState.text}
              onChangeText={(text) => {
                setFormState((formState) => ({
                  ...formState,
                  text: text,
                }));
              }}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>By</Text>
            <View style={styles.dropdownContainer}>
              <Picker
                selectedValue={formState.postedBy}
                onValueChange={(value, index) =>
                  setFormState((formState) => ({
                    ...formState,
                    postedBy: value,
                  }))
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
          <View>
            <Button
              title="Submit"
              titleStyle={styles.nextStepButtonTitle}
              buttonStyle={styles.nextStepButton}
              onPress={() => {
                setFormState((formState) => ({
                  ...formState,
                  createdAt: new Date(),
                }));
                handleSubmitNotice();
              }}
            />
            <Button
              title="Close"
              titleStyle={styles.backButtonTitle}
              buttonStyle={styles.backButton}
              onPress={() => closeModal()}
            />
          </View>
        </View>
      </View>
    </Modalize>,
    openModal,
    closeModal,
  ];
};

export default CreateNoticeModal;
