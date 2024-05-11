import { Dispatch, SetStateAction, useState } from "react";
import { FlatList, Image, Platform, Pressable, StyleSheet } from "react-native";
import Emoji1 from "../assets/images/emoji1.png";
import Emoji2 from "../assets/images/emoji2.png";
import Emoji3 from "../assets/images/emoji3.png";
import Emoji4 from "../assets/images/emoji4.png";
import Emoji5 from "../assets/images/emoji5.png";
import Emoji6 from "../assets/images/emoji6.png";

const EMOJIS = [Emoji1, Emoji2, Emoji3, Emoji4, Emoji5, Emoji6];

type EmojiListProps = {
  onSelect: Dispatch<SetStateAction<null>>;
  onCloseModal: () => void;
};

function EmojiList(props: EmojiListProps) {
  const { onSelect, onCloseModal } = props;
  const [emoji] = useState(EMOJIS);
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}
        >
          <Image key={index} source={item} style={styles.img} />
        </Pressable>
      )}
    />
  );
}

export default EmojiList;

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 20,
  },
  img: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
