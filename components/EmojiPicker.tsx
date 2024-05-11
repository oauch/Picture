import { MaterialIcons } from "@expo/vector-icons";
import { ReactNode } from "react";
import {
  GestureResponderEvent,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

type EmojiPickerProps = {
  isVisible: boolean;
  children: ReactNode;
  onClose: (e: GestureResponderEvent) => void;
};

function EmojiPicker(props: EmojiPickerProps) {
  const { isVisible, children, onClose } = props;
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>스티커를 선택하세요.</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
}

export default EmojiPicker;

const styles = StyleSheet.create({
  modalContent: {
    width: "100%",
    height: "25%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#25292e",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  titleContainer: {
    height: "16%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#464c55",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 20,
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
  pickerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
});
