import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Searchbar } from "react-native-paper";
import ListItem from "@/components/ListItem";
import { subjects } from "subjects-pkg";
import { router } from "expo-router";

export default function App() {
  const [subject, setSubject] = useState("");
  const [items, setItems] = useState(subjects);

  const searchItem = (query) => {
    if (query.length < 3) {
      setSubject(query);
      setItems(subjects);
      return;
    }
    setSubject(query);
    setItems(items.filter((item) => item.label.includes(query)));
  };

  const handleSelected = async (value) => {
    setSubject(value);
    router.push(`/search/${value}`);
  };

  return (
    <SafeAreaView className="h-full">
      <View className="items-center bg-black px-4">
        <Text className="my-7 text-2xl font-bold text-white">
          Select a subject:
        </Text>
        <Searchbar
          className="mb-5"
          placeholder="Search a subject"
          onChangeText={(item) => searchItem(item)}
          value={subject}
        />
      </View>
      <FlatList
        data={items.sort((a, b) => a.label.localeCompare(b.label))}
        keyExtractor={(item) => item.value}
        renderItem={({ item }) => (
          <ListItem
            title={item.label}
            selected={() => {
              handleSelected(item.value);
            }}
          />
        )}
      />
    </SafeAreaView>
  );
}
