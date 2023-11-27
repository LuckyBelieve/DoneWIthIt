import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppForm, AppFormField, SubmitButton } from "../components/Forms";
import * as yup from "yup";
import AppFormPicker from "../components/Forms/AppFormPicker";
import CategoryPickerItem from "../components/CategoryPickerItem";
const validationSchema = yup.object().shape({
  title: yup.string().required().min(3).label("Title"),
  price: yup.number().required().min(1).max(10000).label("Price"),
  category: yup.string().required().label("Category").nullable(),
  description: yup.string().min(5).max(300).label("Description"),
});
const categories = [
  { label: "furniture", value: 1,backgroundColor:"red",icon:"apps" },
  { label: "Clothing", value: 2 ,backgroundColor:"green",icon:"email" },
  { label: "Camera", value: 3 ,backgroundColor:"blue",icon:"lock"},
];
function ListingEditScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField 
        name={"title"} 
        placeholder={"Title"}
        maxLength={255}
         />
        <AppFormField 
        name={"price"} 
        maxLength={8} 
        placeholder={"Price"}
        />
        <AppFormPicker
        numberOfColumns={3}
          name={"category"}
          placeholder={"Category"}
          items={categories}
          PickerItemComponent={CategoryPickerItem}
        />
        <AppFormField
          name={"description"}
          placeholder={"Description"}
          multiline
          numberOfLines={3}
        />
        <SubmitButton title={"Post"} />
      </AppForm>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});
export default ListingEditScreen;
