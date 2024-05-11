import { MaterialIcons } from "@expo/vector-icons";
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";

type IconButtonProps = {
  icon: any;
  label: string;
  onPress: (e: GestureResponderEvent) => void;
};

function IconButton(props: IconButtonProps) {
  return (
    <Pressable style={styles.iconButton} onPress={props.onPress}>
      <MaterialIcons name={props.icon} size={24} color="#fff" />
      <Text style={styles.iconButtonLabel}>{props.label}</Text>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconButtonLabel: {
    color: "#fff",
    marginTop: 12,
  },
});
