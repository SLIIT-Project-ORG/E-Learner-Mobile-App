import React from "react";
import { useState } from "react";
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

const AddArticles = () => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [thumbnaillink, setthumbnaillink] = useState("");
  const [authors, setauthors] = useState("");

  function sendData(e) {
    e.preventDefault();
    const newArticle = {
      title,
      description,
      thumbnaillink,
      authors,
    };
    
    axios
      .post("http://localhost:8000/articles/submit", newArticle)
      .then(() => {
        alert("Article Added Successfylly Detais added");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <SafeAreaView style={{ felix: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.myTitle}>E- Learner</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.myTitle2}>Add Articles</Text>
        </View>

        <View>
          <Text style={styles.label}>Article Title</Text>
          <TextInput
            style={styles.inputfields}
            onChange={(e) => {
              settitle(e.target.value);
            }}
            placeholder="Enter Title of the Article"
          />
        </View>

        <View>
          <Text style={styles.label}> Description</Text>
          <TextInput
            style={styles.inputfields}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
            placeholder=" Write the description of the Article"
          />
        </View>
        <View>
          <Text style={styles.label}>Thumbnail Link</Text>
          <TextInput
            style={styles.inputfields}
            onChange={(e) => {
              setthumbnaillink(e.target.value);
            }}
            placeholder="Enter Thubmnail Link"
          />
        </View>
        <View>
          <Text style={styles.label}>Authors</Text>
          <TextInput
            style={styles.inputfields}
            onChange={(e) => {
              setauthors(e.target.value);
            }}
            placeholder="Mention Authors"
          />
        </View>
        <View>
          <TouchableOpacity style={styles.defaultButton}>
            <Text style={{fontWeight:'bold' , fontSize:20, color:'black' ,textAlign:'center'}} onPress={sendData}>
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
    color: "green",
  },
  myTitle2: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "darkblue",
  },

  BorderClass: {
    width: 360,
    height: 300,
    borderWidth: 4,
    borderColor: 'black',
  },
  label: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: -160,
    fontWeight: "bold",
    textAlign:"center",
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
    backgroundColor:'#1fbf3f',
       marginTop:15,
       marginLeft:50,
       marginRight:50,
       padding:10,
       borderRadius:15
        
 
  },
  defaultButton1: {
    backgroundColor:'#a1f0b0',
    marginTop:10,
    marginLeft:60,
    marginRight:20,
    padding:10,
    borderRadius:15

  },
});

export default AddArticles;
