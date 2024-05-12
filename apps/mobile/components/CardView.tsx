import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StartRating } from "./StarRating";

const CardView = ({ title, rating, coverUrl, onClick }) => {
  return (
    <View className="m-2 h-60 w-44">
      <TouchableOpacity
        className="h-full w-full flex-col rounded-xl bg-gray-300"
        onPress={onClick}
      >
        <Image
          source={{ uri: coverUrl }}
          style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
          resizeMode="cover"
          className="h-full w-full flex-1"
        />
        <Text className="ml-2 text-sm">{title}</Text>
        <StartRating rating={rating} styles="ml-2"/>
      </TouchableOpacity>
    </View>
  );
};

export default CardView;
