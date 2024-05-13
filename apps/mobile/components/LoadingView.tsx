import { View, ActivityIndicator } from "react-native";
import React from "react";
import { MD2Colors } from "react-native-paper";

const LoadingView = () => {
  return (
    <View className="h-full items-center justify-center">
      <ActivityIndicator
        animating={true}
        color={MD2Colors.white}
        size="large"
      />
    </View>
  );
};

export default LoadingView;
