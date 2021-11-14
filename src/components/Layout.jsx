import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

const Layout = ({ children }) => (
  <SafeAreaView>
    <ScrollView contentContainerStyle={styles.container}>{children}</ScrollView>
  </SafeAreaView>
);

export default Layout;
