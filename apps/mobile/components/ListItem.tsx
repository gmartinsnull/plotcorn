import { View, Text, TouchableOpacity } from "react-native";

const ListItem = ({ 
  title, 
  selected 
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        selected(title);
      }}
    >
      <View className="px-4 py-2 rounded-md">
        <Text className="text-white pl-5 text-2xl">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
