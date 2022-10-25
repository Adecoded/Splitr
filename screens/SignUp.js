import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Input from "../component/Input";
import CustomButton from "../component/Button";

const windowWidth = Dimensions.get("window").width;
const SignUp = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator="false"
      style={{ paddingVertical: 5, backgroundColor: "white", flex: 1 }}
    >
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
          <Text style={styles.GetStarted}>Get Started</Text>
          <Ionicons name="chevron-back" size={24} color="white" />
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={styles.HeaderText}>Welcome to Splitr, fill the </Text>
          <Text style={styles.HeaderText}>form below to get started.</Text>
        </View>
      </View>
      <Input name={"Name"} placeholder={"Seun Zaynab"} />
      <Input name={"Email"} placeholder={"group7@gmail..com"} />
      <Input name={"Username"} placeholder={"e.g @alex"} />
      <Input name={"Password"} placeholder={"******"} />

      <View style={{ marginTop: 12 }}>
        <CustomButton
          backgroundColor={"#7A1FEE"}
          color="white"
          text={"Sign Up"}
        />
      </View>

      <View
        style={{
          alignItems: "center",
          margin: 2,
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignSelf: "center",
        }}
      >
        <View style={styles.lines}></View>
        <Text style={{ margin: 10 }}>or continue with</Text>
        <View style={styles.lines}></View>
      </View>

      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <TouchableOpacity style={styles.logoContainer}>
          <Image source={require("../assets/apple.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoContainer}>
          <Image source={require("../assets/socilagoogle.png")} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignUp;

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
  lines: {
    height: 1,
    backgroundColor: "#D9D9D9",
    width: windowWidth / 3.4,
  },
  logoContainer: {
    width: 54,
    height: 54,
    borderRadius: 30,
    borderWidth: 2,
    margin: 12,
    borderColor: "#EFEFEF",
    alignItems: "center",
    justifyContent: "center",
  },
});
