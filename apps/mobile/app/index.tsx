import { View, Text, FlatList, Alert, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import ListItem from "@/components/ListItem";
import { router } from "expo-router";
import { getSubjects } from "@/api/books-api";
import LoadingView from "@/components/LoadingView";

export default function App() {
  const [subject, setSubject] = useState("");
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchItem = (query) => {
    if (query.length < 3) {
      setSubject(query);
      setItems(items);
      return;
    }
    setSubject(query);
    const filteredItems = items.filter((item) => item.label.includes(query));
    setFilteredItems(filteredItems);
  };

  const fetchData = async () => {
    try {
      const response = await getSubjects();
      setItems(response);
    } catch (error) {
      console.log(error);
      Alert.alert("Error fetching subjects", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      {loading && items.length === 0 ? (
        <LoadingView />
      ) : (
        <FlatList
          data={subject.length < 3 ? items : filteredItems}
          keyExtractor={(item) => item.value}
          keyboardShouldPersistTaps="handled"
          renderItem={({ item }) => (
            <ListItem
              title={item.label}
              selected={() => {
                router.push(`/search/${item.value}`);
              }}
            />
          )}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={fetchData} />
          }
        />
      )}
    </SafeAreaView>
  );
}
