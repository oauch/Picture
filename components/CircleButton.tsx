import { MaterialIcons } from "@expo/vector-icons";
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  View,
} from "react-native";

type CircleButtonProps = {
  onPress?: (e: GestureResponderEvent) => void;
};

function CircleButton(props: CircleButtonProps) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.circleButton} onPress={props.onPress}>
        <MaterialIcons name="add" size={32} color={"#25292e"} />
      </Pressable>
    </View>
  );
}

export default CircleButton;

const styles = StyleSheet.create({
  container: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: "#ffd3d",
    borderRadius: 42,
    padding: 3,
  },
  circleButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 42,
    backgroundColor: "#fff",
  },
});
