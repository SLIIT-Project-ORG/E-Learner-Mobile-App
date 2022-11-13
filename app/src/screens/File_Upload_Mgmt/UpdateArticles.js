import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

const UpdateArticleDetails = ({ route }) => {
  const [data, setData] = useState([]);

  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [thumbnaillink, setthumbnaillink] = useState("");
  const [authors, setauthors] = useState("");

  console.log(route.params.paramKey);
  useEffect(() => {
    console.log("check");
    axios
      .get(`http://localhost:8000/articles/get/${route.params.paramKey}`)

      .then((res) => {
        setData(res.data);
        console.log("check");
        console.log(res.data);
        console.log(route.params.paramKey);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function updateData(e) {
    e.preventDefault();
  

    
    axios
      .put(
        `http://localhost:8000/articles/update/${route.params.paramKey}`,
        data
      )
      .then(() => {
        console.log(data);
        alert("updated Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
    console.log(data);
  };

  return (
    <SafeAreaView style={styles.container} >
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.myTitle}>E- Learner</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.myTitle2}>Update Article Details</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.label}>Article Title</Text>
          <TextInput
            style={styles.inputfields}
            name="title"
            onChangeText={handleChange}
            placeholder={data.title}
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.label}> Description </Text>
          <TextInput
            style={styles.inputfields}
            name="description"
            onChangeText={handleChange}
            placeholder={data.description}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.label}>Thumbnail Link</Text>
          <TextInput
            style={styles.inputfields}
            name="thumbnaillink"
            onChangeText={handleChange}
            placeholder={data.thumbnaillink}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.label}>Authors</Text>
          <TextInput
            style={styles.inputfields}
            name="authors"
            onChangeText={handleChange}
            placeholder={data.authors}
          />
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.defaultButton}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                color: "black",
                textAlign: "center",
              }}
              onPress={updateData}
            >
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  myTitle: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2fa347",
  },
  myTitle2: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#00e673",
  },

  BorderClass: {
    width: 360,
    height: 300,
    borderWidth: 4,
    borderColor: "black",
  },
  label: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: -160,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  labeltext: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 80,
    color: "red",
    marginTop: 10,
  },
  inputfields: {
    borderColor: "a7a7",
    borderWidth: 1,
    padding: 15,
    fontSize: 16,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  defaultButton: {
    backgroundColor: "#1fbf3f",
    marginTop: 15,
    marginLeft: 50,
    marginRight: 50,
    padding: 10,
    borderRadius: 15,
  },
  defaultButton1: {
    backgroundColor: "#a1f0b0",
    marginTop: 10,
    marginLeft: 60,
    marginRight: 20,
    padding: 10,
    borderRadius: 15,
  },
});

export default UpdateArticleDetails;

