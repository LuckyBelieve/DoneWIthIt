import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppForm, AppFormField, SubmitButton } from "../components/Forms";
import * as yup from "yup";
import AppFormPicker from "../components/Forms/AppFormPicker";
const validationSchema = yup.object().shape({
  title: yup.string().required().min(3).label("Title"),
  price: yup.number().required().min(1).max(10000).label("Price"),
  category: yup.string().required().label("Category"),
  description: yup.string().min(5).max(300).label("Description"),
});
const items = [
    {
        label:"furniture",value:1
    },
    {
        label:"Gaming",value:2
    }
    ,
    {
        label:"dfjfk",value:3
    }
]
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
         />
         <AppFormField name={"price"} placeholder={"Price"} />
         <AppFormPicker name={"category"} placeholder={"Category"} items={items}/>
         <AppFormField name={"description"} placeholder={"Description"} multiline={"true"}/>
         <SubmitButton title={"Post"}/>
      </AppForm>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10
    }
})
export default ListingEditScreen;
