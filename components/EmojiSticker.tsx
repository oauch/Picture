import { Image, ImageSourcePropType, View } from "react-native";

type EmojiStickerProps = {
  imageSize: number;
  stickerSource: ImageSourcePropType;
};

function EmojiSticker(props: EmojiStickerProps) {
  const { imageSize, stickerSource } = props;
  return (
    <View style={{ top: -350, left: 140 }}>
      <Image
        source={stickerSource}
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
}

export default EmojiSticker;
