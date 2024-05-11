import { Image, ImageSourcePropType, StyleSheet } from "react-native";

type ImgViewType = {
  src: ImageSourcePropType;
  alt: string;
  selectedImg: string | null;
};

function ImgViewer(props: ImgViewType) {
  const { src, alt, selectedImg } = props;
  const imgSrc = selectedImg ? { uri: selectedImg } : src;
  return <Image source={imgSrc} alt={alt} style={styles.img} />;
}

export default ImgViewer;

const styles = StyleSheet.create({
  img: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
