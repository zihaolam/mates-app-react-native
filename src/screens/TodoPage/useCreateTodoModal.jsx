import React, { useState, useRef } from "react";
import { Text, View, TextInput } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";
import { styles } from "./style";
import { Modalize } from "react-native-modalize";
import { Dimensions } from "react-native";
import { users } from "mocks/user";
import { Picker } from "@react-native-picker/picker";
import { useTodoContext } from "contexts/todo";
import Toast from "react-native-toast-message";

const height = Dimensions.get("window").height;

const CreateTodoModal = () => {
  const initialState = {
    title: "",
    content: "",
    assignedTo: "",
    assignedBy: "",
  };

  const [formState, setFormState] = useState(initialState);

  const { state: todoState, dispatch: todoDispatch } = useTodoContext();

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
      text1: "Added To-do",
    });
  };

  const handleSubmitTodo = () => {
    todoDispatch({
      type: "addTodo",
      payload: formState,
    });
    closeModal();
    showSuccessToast();
  };

  return [
    <Modalize
      ref={modalizeRef}
      modalHeight={Math.min(height - 220, height * 0.9)}
    >
      <View style={styles.TodoModalContainer}>
        <Text style={styles.addTodoTitle}>Add a to-do</Text>
        <View style={styles.textInputContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Title</Text>
            <TextInput
              placeholder="To-do Title"
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
            <Text style={styles.inputLabel}>Content</Text>
            <TextInput
              placeholder="Content"
              style={styles.inputBox}
              autoCapitalize="none"
              value={formState.content}
              onChangeText={(text) => {
                setFormState((formState) => ({
                  ...formState,
                  content: text,
                }));
              }}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Assign To</Text>
            <View style={styles.dropdownContainer}>
              <Picker
                selectedValue={formState.assignedTo}
                onValueChange={(value, index) =>
                  setFormState((formState) => ({
                    ...formState,
                    assignedTo: value,
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

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Assigned By</Text>
              <View style={styles.dropdownContainer}>
                <Picker
                  selectedValue={formState.assignedBy}
                  onValueChange={(value, index) =>
                    setFormState((formState) => ({
                      ...formState,
                      assignedBy: value,
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
          </View>
          <View>
            <Button
              title="Submit"
              titleStyle={styles.nextStepButtonTitle}
              buttonStyle={styles.nextStepButton}
              onPress={handleSubmitTodo}
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

export default CreateTodoModal;
