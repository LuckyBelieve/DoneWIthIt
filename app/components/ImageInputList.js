import React, { useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ImageInput from "./ImageInput";
function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  const scrollView = useRef();
  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((imageUri) => (
            <ImageInput
              key={imageUri}
              imageUri={imageUri}
              onChangeImage={() => onRemoveImage(imageUri)}
            />
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 20,
  },
});
export default ImageInputList;
