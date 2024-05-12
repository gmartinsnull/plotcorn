import FontAwesome from "@expo/vector-icons/FontAwesome";
import { View } from "react-native";

const yellowColor = "#EAB308";

export function StartRating(props: { rating: number; styles?: string }) {
  if (props.rating === 0) {
    return (
      <View className={`flex-row ${props.styles}`}>
        <FontAwesome name="star-o" size={20} />
        <FontAwesome name="star-o" size={20} />
        <FontAwesome name="star-o" size={20} />
        <FontAwesome name="star-o" size={20} />
        <FontAwesome name="star-o" size={20} />
      </View>
    );
  } else if (props.rating > 0 && props.rating < 1) {
    return (
      <View className={`flex-row ${props.styles}`}>
        <FontAwesome name="star" size={20} color={yellowColor} />
        <FontAwesome name="star-o" size={20} />
        <FontAwesome name="star-o" size={20} />
        <FontAwesome name="star-o" size={20} />
        <FontAwesome name="star-o" size={20} />
      </View>
    );
  } else if (props.rating > 1 && props.rating < 2) {
    return (
      <View className={`flex-row ${props.styles}`}>
        <FontAwesome name="star" size={20} color={yellowColor} />
        <FontAwesome name="star-o" size={20} />
        <FontAwesome name="star-o" size={20} />
        <FontAwesome name="star-o" size={20} />
        <FontAwesome name="star-o" size={20} />
      </View>
    );
  } else if (props.rating > 2 && props.rating < 3) {
    return (
      <View className={`flex-row ${props.styles}`}>
        <FontAwesome name="star" size={20} color={yellowColor} />
        <FontAwesome name="star" size={20} color={yellowColor} />
        <FontAwesome name="star-o" size={20} />
        <FontAwesome name="star-o" size={20} />
        <FontAwesome name="star-o" size={20} />
      </View>
    );
  } else if (props.rating > 3 && props.rating < 4) {
    return (
      <View className={`flex-row ${props.styles}`}>
        <FontAwesome name="star" size={20} color={yellowColor} />
        <FontAwesome name="star" size={20} color={yellowColor} />
        <FontAwesome name="star" size={20} color={yellowColor} />
        <FontAwesome name="star-o" size={20} />
        <FontAwesome name="star-o" size={20} />
      </View>
    );
  } else if (props.rating > 4 && props.rating < 20) {
    return (
      <View className={`flex-row ${props.styles}`}>
        <FontAwesome name="star" size={20} color={yellowColor} />
        <FontAwesome name="star" size={20} color={yellowColor} />
        <FontAwesome name="star" size={20} color={yellowColor} />
        <FontAwesome name="star" size={20} color={yellowColor} />
        <FontAwesome name="star-o" size={20} />
      </View>
    );
  } else if (props.rating >= 20) {
    return (
      <View className={`flex-row ${props.styles}`}>
        <FontAwesome name="star" size={20} color={yellowColor} />
        <FontAwesome name="star" size={20} color={yellowColor} />
        <FontAwesome name="star" size={20} color={yellowColor} />
        <FontAwesome name="star" size={20} color={yellowColor} />
        <FontAwesome name="star" size={20} color={yellowColor} />
      </View>
    );
  }
}
