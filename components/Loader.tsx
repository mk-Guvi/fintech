import { ActivityIndicator } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import Colors from "@/constants/Colors"; // Assuming you have a custom Colors file.

const Loader = ({ isLoading}: { isLoading: boolean }) => {
  return isLoading ? (
    <BlurView
      intensity={80}
      tint={"extraLight"}
      style={{
        position: "absolute", 
        flex:1,
        height:"100%",
        width:"100%",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 50, 
      }}
    >
      <ActivityIndicator size="large" color={Colors.primary} />
    </BlurView>
  ) : null;
};

export default Loader;
