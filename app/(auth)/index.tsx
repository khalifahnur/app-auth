import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable, TouchableWithoutFeedback, Keyboard } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { HelloWave } from "@/components/HelloWave";
import { Svg, Path } from "react-native-svg";
import InputField from "@/components/InputField";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import SocialButtons from "@/components/SocialLogo";

export default function signin() {
  const [isChecked,setIsChecked] = useState<Boolean>(false)

  const HandleCheckbox = () =>{
    setIsChecked(!isChecked)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 5,
          flexDirection: "row",
          alignItems: "center",
          flex: 0.3,
        }}
      >
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Image
            source={require("../../assets/images/Hi.png")}
            tintColor={"#fff"}
            style={{ width: 60, height: 60 }}
          />
          <Text
            style={{
              color: "#fff",
              fontWeight: "semibold",
              fontSize: 20,
              paddingTop: 10,
              alignItems: "center",
              textAlign: "center",
            }}
          >
            Welcome Back <HelloWave />
          </Text>
        </View>

        <View style={{ width: 500, height: 300, position: "relative" }}>
          <View
            style={{
              position: "relative",
              transform: [{ translateX: -50 }, { translateY: 0 }],
            }}
          >
            <Svg viewBox="0 0 337.5 337.5" xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M168.75,289.9495423096761C204.14349955795512,287.9539876453925,236.28868405569028,267.69985381263393,255.3482842878406,237.8098272424261C272.27784581554357,211.26021246973895,265.26188572534073,179.00441130488718,259.19765732905523,148.10591244076673C252.76332159274307,115.32164007371881,248.3212003180965,79.70358619820273,220.64493185436706,60.98906363074351C188.3567104222263,39.155966822667025,147.35444783126405,35.255526989546674,110.33206941324117,47.44391719311772C65.699444150159,62.13772876767024,15.566079922878863,85.60020136623935,6.090435048670018,131.62401575271815C-3.2842090154050743,177.15726273189242,35.661992389783364,215.89254302758624,68.97498676296694,248.31791793192343C96.14429337796984,274.7633026671825,130.8953532792371,292.0838612601018,168.75,289.9495423096761"
                fill="#06069a"
              />
            </Svg>
          </View>
          <View
            style={{
              transform: [{ translateX: 80 }, { translateY: 50 }],
              position: "absolute",
            }}
          >
            <Image
              source={require("../../assets/images/share.png")}
              style={{ width: 150, height: 150 }}
            />
          </View>
        </View>
      </View>
      
      <View style={styles.content}>
        <View style={styles.content}>
          <ThemedText
            style={{
              color: "#000",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 22,
            }}
          >
            Log In
          </ThemedText>

          <View>
            <InputField labelTxt={"Email"} type="email" />
            <InputField labelTxt={"Password"} type="password" />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingVertical: 10,
                paddingHorizontal: 20,
              }}
            >
              <View
                style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
              >
                  <Fontisto onPress={HandleCheckbox} name={isChecked ? "checkbox-active":"checkbox-passive"} size={20} color="black" />
                <Text>Remember Me</Text>
              </View>
              <Text>Forgot Password ?</Text>
            </View>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
                <AntDesign
                  name="arrowright"
                  size={20}
                  color="#fff"
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginTop: 20 }}>
            <View style={{ alignItems: "center" }}>
              <Text style={{fontWeight:'500',fontSize:15,color:'gray'}}>Or Log In With</Text>
            </View>
            <View>
              <SocialButtons />
            </View>
          </View>
          <View style={{ paddingHorizontal: 20, alignItems: "center",marginTop:10 }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#d4d4d4",
                width: "100%",
                alignItems: "center",
              }}
            />
          </View>
          <Pressable style={{alignItems:'center',marginTop:20}}>
            <Text style={{fontWeight:'500',fontSize:15,color:'gray'}}>Don't Have An Account ? <Text style={{textDecorationLine:'underline'}}>Register</Text></Text>
          </Pressable>
        </View>
      </View>
      
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "navy",
    color: "#000",
  },
  content: {
    backgroundColor: "#fff",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    marginTop: 20,
    flex: 0.7,
  },
  btnContainer: {
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 5,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "navy",
    width: "50%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
  },
  icon: {
    marginLeft: 10,
  },
});
