import { View, Alert, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { getMoviesByGenre } from "@/api/books-api";
import { useEffect, useState } from "react";
import { Movie } from "movies-pkg";

import { SafeAreaView } from "react-native-safe-area-context";
import CardView from "@/components/CardView";
import ModalView from "@/components/ModalView";
import LoadingView from "@/components/LoadingView";

const SearchMovies = () => {
  const { genre } = useLocalSearchParams();
  const [data, setData] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState<Movie>();

  const fetchData = async () => {
    try {
      const response = await getMoviesByGenre(genre);
      setData(response);
    } catch (error) {
      console.log(error);
      Alert.alert("Error fetching books", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (movie: Movie) => {
    setModalData(movie);
    setModalVisible(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView className="h-full items-center bg-black">
      {loading && data.length === 0 ? (
        <LoadingView />
      ) : (
        <>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View>
                <CardView
                  title={item.title}
                  rating={item.vote_average}
                  coverUrl={item.poster_path}
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
              title={modalData.title}
              coverUrl={modalData.poster_path}
              author={[]}
              year={modalData.release_date}
              rating={modalData.vote_average}
              pages={0}
            />
          )}
        </>
      )}
    </SafeAreaView>
  );
};

export default SearchMovies;
