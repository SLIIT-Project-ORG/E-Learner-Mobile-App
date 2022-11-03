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

const AddVideos = () => {
  const [title, settitle] = useState("");
  const [link, setlink] = useState("");
  const [thumbnaillink, setthumbnaillink] = useState("");
  const [description, setdescription] = useState("");

  function sendData(e) {
    e.preventDefault();
    const newfueldetail = {
      title,
      link,
      thumbnaillink,
      description,
    };
    //console.log(newfueldetail);
    axios
      .post("http://localhost:8000/videodetails/add", newfueldetail)
      .then(() => {
        alert("video Detais added");
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
          <Text style={styles.myTitle2}>Add Videos</Text>
        </View>

        <View>
          <Text style={styles.label}>Video Title</Text>
          <TextInput
            style={styles.inputfields}
            onChange={(e) => {
              settitle(e.target.value);
            }}
            placeholder="Video Tital"
          />
        </View>

        <View>
          <Text style={styles.label}> Video Link</Text>
          <TextInput
            style={styles.inputfields}
            onChange={(e) => {
              setlink(e.target.value);
            }}
            placeholder=" Video Link"
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
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.inputfields}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
            placeholder="Description"
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

export default AddVideos;
