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

const UpdateArticles = () => {
  const [topic, settopic] = useState("");
  const [description, setdescription] = useState("");
  const [thumbnaillink, setthumbnaillink] = useState("");
  const [authors, setauthors] = useState("");

  function sendData(e) {
    e.preventDefault();
    const newArticle = {
      topic,
      description,
      thumbnaillink,
      authors,
    };
    
    axios
      .post("http://localhost:5000/articles/submit", newArticle)
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
          <Text style={styles.myTitle2}>UPDATE ARTICLES</Text>
        </View>

        <View>
          <Text style={styles.label}>Article Topic</Text>
          <TextInput
            style={styles.inputfields}
            onChange={(e) => {
              settopic(e.target.value);
            }}
            placeholder="Topic of the Article"
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
            placeholder="Thubmnail Link"
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
            <Text style={{fontWeight:'bold' , fontSize:20, color:'black' ,textAlign:'center'}}>
              Update
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.defaultButton1}>
            <Text style={{fontWeight:'bold' , fontSize:20, color:'black' ,textAlign:'center'}}>
              Cancel
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
    backgroundColor:'gray',
    marginTop:10,
    marginLeft:60,
    marginRight:40,
    padding:10,
    borderRadius:15

  },
});

export default UpdateArticles;
