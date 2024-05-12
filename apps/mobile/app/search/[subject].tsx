import { View, Alert, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { getBooksBySubject } from "@/api/books-api";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { useEffect, useState } from "react";
import { Book } from "subjects-pkg/Book";

import { SafeAreaView } from "react-native-safe-area-context";
import CardView from "@/components/CardView";
import ModalView from "@/components/ModalView";

const Search = () => {
  const { subject } = useLocalSearchParams();
  const [data, setData] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState<Book>();

  const fetchData = async () => {
    try {
      const response = await getBooksBySubject(subject);
      setData(response);
    } catch (error) {
      console.log(error);
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (book: Book) => {
    console.log(book);
    setModalData(book);
    setModalVisible(true);
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
        <View>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View>
                <CardView
                  title={item.title}
                  rating={item.rating}
                  coverUrl={item.coverUrl}
                  onClick={() => handleClick(item)}
                />
              </View>
            )}
            numColumns={2}
          />
          {modalData && (
            <ModalView
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              book={modalData}
            />
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default Search;
