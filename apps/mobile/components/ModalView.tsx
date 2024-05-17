import {
  View,
  Text,
  Modal,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import { StartRating } from "./StarRating";

const ModalView = ({
  modalVisible,
  setModalVisible,
  title,
  coverUrl,
  author,
  year,
  rating,
  pages,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View className="flex-1 items-center justify-center">
        <View className="relative h-3/4 w-4/5 items-center justify-center rounded-lg bg-white shadow-md shadow-slate-600">
          <Image
            source={{ uri: coverUrl }}
            style={{ borderRadius: 10 }}
            resizeMode="cover"
            className="h-60 w-40"
          />
          <View className="w-full items-center justify-center space-y-2 py-5">
            <View className="border-2py-5 space-y-2">
              <Text className="text-lg font-bold">{title}</Text>
              {author.length > 0 && <Text>Author: {author[0]}</Text>}
              <Text>Year: {year}</Text>
              {pages > 0 && <Text>Pages: {pages}</Text>}
              <StartRating rating={rating} styles="mt-2" />
            </View>
          </View>
          <TouchableOpacity
            className="absolute bottom-0 m-5 h-14 w-40 items-center justify-center rounded-full bg-black text-white"
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Text className="text-sm text-white">Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalView;
