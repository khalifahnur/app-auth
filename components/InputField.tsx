import {
  View,
  Text,
  type TextInputProps,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

type InputProps = TextInputProps & {
  labelTxt: string;
  type: "email" | "text" | "password";
};

const InputField = ({ labelTxt, type, ...rest }: InputProps) => {
  const [focused, setIsFocused] = useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const handlePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  };

  const getKeyboardType = () => {
    switch (type) {
      case "email":
        return "email-address";
      case "text":
      default:
        return "default";
    }
  };

  const isSecureTextEntry = type === "password" && !passwordVisible;

  return (
    <View style={{ paddingHorizontal: 40, marginTop: 20,marginBottom:10 }}>
      <Text
        style={{
          fontSize: 16,
          color: "#000",
          fontWeight: "500",
          marginBottom: 2,
          textAlign: "left",
        }}
      >
        {labelTxt}
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          style={[styles.textInput, focused && styles.inputFocused]}
          keyboardType={getKeyboardType()}
          secureTextEntry={isSecureTextEntry}
          {...rest}
        />
        {type === "password" && (
          <TouchableOpacity onPress={handlePasswordVisible}>
            <Feather
              name={passwordVisible ? "eye" : "eye-off"}
              size={20}
              color="black"
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 2,
    width: "90%", // adjust the width to accommodate the icon
    padding: 5,
    color: "#000",
    borderBottomColor: "#e8e8e8",
  },
  inputFocused: {
    borderBottomColor: "navy",
  },
  icon: {
    marginLeft: 10,
  },
});
