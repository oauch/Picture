import { FontAwesome } from "@expo/vector-icons";
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

type ButtonProps = {
  label: string;
  theme?: string;
  onPress?: (e: GestureResponderEvent) => void;
};

function Button(props: ButtonProps) {
  if (props.theme === "primary") {
    return (
      <View
        style={[
          styles.container,
          { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={props.onPress}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>
            {props.label}
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={props.onPress}>
        <Text style={styles.buttonLabel}>{props.label}</Text>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 68,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    padding: 3,
  },
  button: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 10,
    gap: 20,
  },
  buttonIcon: {
    borderRadius: 18,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});
