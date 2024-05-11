import { View, Text, TouchableOpacity } from "react-native";

const ListItem = ({ title, selected }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        selected(title);
      }}
    >
      <View className="rounded-md px-4 py-2">
        <Text className="pl-5 text-2xl text-white">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
