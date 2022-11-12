import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, View, StyleSheet, TouchableOpacity, Image, Button } from "react-native";
import AppBarComponent from "../Common/AppBarComponent";
import table from '../../../assets/table.png';
import axios from "axios";
import PostViewById from "./PostViewById";


const PostView = ({ navigation }) => {

  const [topic, settopic] = useState([]);


  useEffect(() => {
    axios
      .get(`http://localhost:8000/posts/`)
      .then((data) => {
        settopic(data.data);
        console.log(data.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);


  return (
    <SafeAreaView>
      <ScrollView>

        <View style={Styles.container}>
          <marquee style={Styles.title}>POST VIEW</marquee>
        </View>


        {

          topic.map((value, index) => {

            return (
              <View style={Styles.box}>
                <View><Image source={table} style={Styles.BorderClass1}></Image>
                </View>

                <View >
                  <Text style={Styles.label}>{value.topic}</Text>
                </View>

                <View>
                  <TouchableOpacity style={Styles.defaultButton1} >
                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black', textAlign: 'center' }}> DOWNLOAD NOW</Text>
                  </TouchableOpacity>
                </View>


                <View>
                  <TouchableOpacity style={Styles.defaultButton2} >
                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black', textAlign: 'center' }} onPress={() =>
                      navigation.navigate('VIEW POST', {
                        paramKey: value._id
                      })
                    }
                    > VIEW</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )

          })

        }

      </ScrollView>
    </SafeAreaView>
  )
}

const Styles = StyleSheet.create({

  title: {

    fontSize: 30,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: '#1fbf3f',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    padding: 10

  },
  container: {
    backgroundColor: 'white',
  },
  label: {
    fontSize: 20,
    marginTop: -100,
    marginLeft: 100,
    fontWeight: "bold",
    textAlign: "center",
    color: 'black'

  },
  box: {

    backgroundColor: '#c2c2d6',
    height: 150,
    width: 340,
    borderColor: 'black',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 50,
    borderRadius: 10,
    borderWidth: 2,


  },
  defaultButton1: {

    backgroundColor: '#1fbf3f',
    marginTop: -60,
    marginLeft: 130,
    marginRight: 30,
    padding: 10,
    borderRadius: 15,
    fontWeight: 'bold',
    fontSize: 16

  },

  defaultButton2: {

    backgroundColor: '#99e6ff',
    marginTop: -10,
    marginLeft: 130,
    marginRight: 30,
    padding: 10,
    borderRadius: 15,
    fontWeight: 'bold',
    fontSize: 16

  },

  BorderClass1:
  {

    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: 'darkgray',
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  }



})
export default PostView 