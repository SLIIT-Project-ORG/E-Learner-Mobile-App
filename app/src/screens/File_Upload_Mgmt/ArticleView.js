import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useCallback } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  Linking,
} from "react-native";

import { Card, ListItem, Button, Icon } from "react-native-elements";

const ArticleView = ({navigation}) => {
  const [articledetails, setarticledetails] = useState([]);
  const [searchData, setSearchData] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:8000/articles/`)
      .then((articledetails) => {
        setarticledetails(articledetails.data);
        console.log(articledetails.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  function deletearticle(id) {
    axios
      .delete(`http://localhost:8000/articles/delete/${id}`)
      .then(() => {
        alert("Deleted Successfully");
      })
      .catch((err) => {
        alert("error : " + err);
      });
    window.location.reload();
  }

  const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);

    return (
      <Button
        title="VIEW"
        onPress={handlePress}
        buttonStyle={{
          padding: 10,
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 2,
        }}
      />
    );
  };

  return (
    <SafeAreaView style={{ felix: 1 }}>
      <View style={styles.container}>
        <Text style={styles.myTitle}>E- Learner</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.myTitle2}>Articles</Text>
      </View>
      <View>
      <Button
                    buttonStyle={{
                      backgroundColor: "blue",

                      borderRadius: 0,
                      marginLeft: 0,
                      marginRight: 0,
                      marginBottom: 2,

                    }}
                    title="Add a Article"
                    onPress={() =>
                      navigation.navigate('AddArticle' )
                    }
                  />
        <TextInput
          style={styles.inputfields}
          onChange={(e) => {
            setSearchData(e.target.value);
          }}
          placeholder="Search Articles"
        />
      </View>
      <ScrollView>
        {articledetails
          .filter((value) => {
            if (searchData === "") {
              return value;
            } else if (
              value.title.toLowerCase().includes(searchData.toLowerCase())
            ) {
              return value;
            }
          })

          .map((val, key) => {
            return (
              <View style={styles.container}>
                <Card>
                  <Card.Title>{val.title}</Card.Title>
                  <Card.Image
                    style={{ padding: 0 }}
                    source={val.thumbnaillink}
                  />
                  <Text style={{ marginBottom: 10 }}>{val.description}</Text>
                  {/* <Button
                    buttonStyle={{
                      backgroundColor: "#1fbf3f",

                      borderRadius: 0,
                      marginLeft: 0,
                      marginRight: 0,
                      marginBottom: 2,

                    }}
                    title="View"
                    onPress={() =>
                      navigation.navigate('ViewArticle', {
                        paramKey:val._id,
                        paramName:val.title
                      })
                    }
                  /> */}
                  <Button
                    buttonStyle={{
                      backgroundColor: "#1fbf3f",

                      borderRadius: 0,
                      marginLeft: 0,
                      marginRight: 0,
                      marginBottom: 2,

                    }}
                    title="Update Article"
                    onPress={() =>
                      navigation.navigate('UpdateArticle', {
                        paramKey:val._id,
                        paramName:val.title
                      })
                    }
                  />
                   <Button
                    buttonStyle={{
                      backgroundColor: "gray",

                      borderRadius: 0,
                      marginLeft: 0,
                      marginRight: 0,
                      marginBottom: 2,
                    }}
                    title="Delete Article"
                    onPress={() => deletearticle(val._id)}
                  />
                </Card>
              </View>
            );
          })}
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

export default ArticleView;