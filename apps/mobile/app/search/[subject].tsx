import { View, Text, Alert, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { getBooksBySubject } from "@/api/books-api";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { useEffect, useState } from "react";
import { Book } from "subjects-pkg/Book";

import { SafeAreaView } from "react-native-safe-area-context";
import CardView from "@/components/CardView";

const Search = () => {
  const { subject } = useLocalSearchParams();
  const [data, setData] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await getBooksBySubject(subject);
      setData(response);
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (book: Book) => {
    // TODO: load modal or router push to book details screen
    console.log(book);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView className="mt-2 h-full items-center">
      {loading && data.length === 0 ? (
        <View className="h-full items-center justify-center">
          <ActivityIndicator
            animating={true}
            color={MD2Colors.white}
            size="large"
          />
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardView
              title={item.title}
              rating={item.rating}
              coverUrl={item.coverUrl}
              onClick={() => handleClick(item)}
            />
          )}
          numColumns={2}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
