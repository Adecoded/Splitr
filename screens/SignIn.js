import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Input from "../component/Input";
import CustomButton from "../component/Button";
const SignIn = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 15,
            alignItems: "center",
          }}
        >
          <Ionicons name="chevron-back" size={24} color="black" />
          <Text style={styles.GetStarted}>Login</Text>
          <Ionicons name="chevron-back" size={24} color="white" />
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={styles.HeaderText}>Welcome back👋</Text>
        </View>
      </View>
      <Input name={"Email"} placeholder={"group7@gmail.com"} />
      <Input name={"Password"} placeholder={"******"} />

      <View style={styles.buttonContainer}>
        <CustomButton
          color={"white"}
          text={"Login"}
          backgroundColor={"#7A1FEE"}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  GetStarted: {
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 26,
    color: "#151515",
  },
  HeaderText: {
    color: "#747474",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 26,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    paddingBottom: 25,
    alignSelf: "center",
  },
});
