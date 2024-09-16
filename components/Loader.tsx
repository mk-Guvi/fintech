import { ActivityIndicator, StyleProp, ViewStyle, View } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import Colors from "@/constants/Colors";

const Loader = ({ isLoading, style }: { isLoading: boolean; style?: StyleProp<ViewStyle> }) => {
  return isLoading ? (
    <View style={[{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 50 }, style]}>
      <BlurView
        intensity={80}
        tint="extraLight"
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color={Colors.primary} />
      </BlurView>
    </View>
  ) : null;
};

export default Loader;
