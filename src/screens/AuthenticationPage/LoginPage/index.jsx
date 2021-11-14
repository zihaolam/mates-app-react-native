import { useUserContext } from "contexts/user";
import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

const Login = () => {
  const navigator = useNavigation();

  const initialFormState = {
    username: "",
    password: "",
  };
  const [formState, setFormState] = useState(initialFormState);
  const [errorMsg, setErrorMsg] = useState(false);

  const { dispatch, state } = useUserContext();

  const handleLogin = () => {
    const userIndex = state.allUsers.findIndex(
      (user) => user.username === formState.username
    );
    if (
      userIndex !== -1 &&
      state.allUsers[userIndex].password === formState.password
    ) {
      dispatch({
        type: "login",
        payload: {
          username: state.allUsers[userIndex].username,
        },
      });
    } else setErrorMsg(true);
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
              setErrorMsg(false);
            }}
          />
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
              setErrorMsg(false);
            }}
            onSubmitEditing={handleLogin}
          />
          <View style={styles.errorContainer}>
            {errorMsg ? (
              <Text style={styles.errorText}>Invalid username or password</Text>
            ) : null}
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Login"
            titleStyle={styles.loginButtonTitle}
            buttonStyle={styles.loginButton}
            onPress={handleLogin}
          />
          <Button
            title="Signup"
            titleStyle={styles.signupButtonTitle}
            buttonStyle={styles.signupButton}
            onPress={() => navigator.navigate("signup")}
          />
        </View>
      </View>
    </>
  );
};

export default Login;
