import domImage from "dom-to-image";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { useRef, useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { captureRef } from "react-native-view-shot";
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
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const imgRef = useRef(null);

  if (status !== null) {
    requestPermission();
  }

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

  const onSaveImageAsync = async () => {
    if (Platform.OS !== "web") {
      try {
        const localUri = await captureRef(imgRef, {
          height: 440,
          quality: 1,
        });

        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
          alert("저장 완료");
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        if (imgRef.current !== null) {
          const dataUrl = await domImage.toPng(imgRef.current, {
            quality: 0.95,
            width: 320,
            height: 440,
          });
          let link = document.createElement("a");
          link.download = "sticker-image.png";
          link.href = dataUrl;
          link.click();
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <View ref={imgRef} collapsable={false}>
            <ImgViewer
              src={PlaceHolderImg}
              alt="PlaceHolderImg"
              selectedImg={selectImg}
            />
            {pickedEmoji && (
              <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
            )}
          </View>
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
            <Button label="사진 선택" theme="primary" onPress={pickImgAsync} />
            <Button
              label="이 사진 사용"
              onPress={() => setShowAppOptions(true)}
            />
          </View>
        )}
        <EmojiPicker isVisible={isShowModal} onClose={onModalClose}>
          <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
        </EmojiPicker>
      </View>
    </GestureHandlerRootView>
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
