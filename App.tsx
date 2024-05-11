import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import PlaceHolderImg from "./assets/images/background-image.png";
import Button from "./components/Button";
import CircleButton from "./components/CircleButton";
import EmojiList from "./components/EmojiList";
import EmojiPicker from "./components/EmojiPicker";
import EmojiSticker from "./components/EmojiSticker";
import IconButton from "./components/IconButton";
import ImgViewer from "./components/ImgViewer";

export default function App() {
  const [selectImg, setSelectImg] = useState<string | null>(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState(null);

  const pickImgAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectImg(result.assets[0].uri);
      setShowAppOptions(false);
    } else {
      alert("이미지를 선택하지 않았습니다.");
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsShowModal(true);
  };

  const onModalClose = () => {
    setIsShowModal(false);
  };

  const onSaveImageAsync = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <ImgViewer
          src={PlaceHolderImg}
          alt="PlaceHolderImg"
          selectedImg={selectImg}
        />
        {pickedEmoji && (
          <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
        )}
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="리셋" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon="save-alt"
              label="저장"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button
            label="Choose to photo"
            theme="primary"
            onPress={pickImgAsync}
          />
          <Button
            label="Use to photo"
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}
      <EmojiPicker isVisible={isShowModal} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  imgContainer: {
    flex: 1,
    paddingTop: 58,
  },
  optionsContainer: {
    position: "absolute",
    bottom: 40,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
