import { useUserContext } from "contexts/user";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, TextInput, Text } from "react-native";
import { Button } from "react-native-elements";
import { styles } from "./styles";

const Signup = () => {
  const navigator = useNavigation();
  const initialFormState = {
    username: "",
    password: "",
    passwordConfirm: "",
  };
  const [formState, setFormState] = useState(initialFormState);
  const [usernameErrorMsg, setUsernameErrorMsg] = useState(false);
  const [passwordErrorMsg, setPasswordErrorMsg] = useState(false);

  const { dispatch, state } = useUserContext();

  const handleSignup = () => {
    if (passwordErrorMsg) return;
    dispatch({
      type: "addUser",
      payload: {
        username: formState.username,
        password: formState.password,
      },
    });
    dispatch({
      type: "login",
      payload: {
        username: formState.username,
      },
    });
    navigator.navigate("login");
  };

  const checkPasswordMatch = (text) => {
    const match = formState.password === text;
    if (!match) setPasswordErrorMsg(true);
    else setPasswordErrorMsg(false);
  };

  const checkUsername = () => {
    const userIndex = state.allUsers.findIndex(
      (user) => user.username === formState.username
    );
    if (userIndex !== -1) setUsernameErrorMsg(true);
  };

  return (
    <>
      <View style={styles.bodyContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>mates</Text>
          <Text style={styles.headerDescription}>
            Connect with the ones you live with
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Username"
            style={styles.inputBox}
            autoCapitalize="none"
            autoCorrect={false}
            value={formState.username}
            onChangeText={(text) => {
              setFormState({ ...formState, username: text });
              setUsernameErrorMsg(false);
            }}
            onBlur={checkUsername}
          />
          {usernameErrorMsg ? (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>Username is taken</Text>
            </View>
          ) : null}
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Password"
            style={styles.inputBox}
            autoCapitalize="none"
            secureTextEntry
            value={formState.password}
            onChangeText={(text) => {
              setFormState({ ...formState, password: text });
              setPasswordErrorMsg(false);
            }}
            onSubmitEditing={handleSignup}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Confirm Password"
            style={styles.inputBox}
            autoCapitalize="none"
            secureTextEntry
            value={formState.passwordConfirm}
            onChangeText={(text) => {
              setFormState({ ...formState, passwordConfirm: text });
              checkPasswordMatch(text);
              // setPasswordErrorMsg(false);
            }}
            onSubmitEditing={handleSignup}
          />
          {passwordErrorMsg ? (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>Passwords do not match</Text>
            </View>
          ) : null}
        </View>
        <Button
          title="Signup"
          titleStyle={styles.loginButtonTitle}
          buttonStyle={styles.loginButton}
          onPress={handleSignup}
        />
      </View>
    </>
  );
};

export default Signup;
