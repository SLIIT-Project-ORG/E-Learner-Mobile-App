import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet, Text ,TouchableOpacity } from 'react-native';
import axios from 'axios';


const PostViewById = ({navigation,route}) => {

  const id = route.params.paramKey;
  const [topic, settopic] = useState([]);


  useEffect(() => {
    axios
      .get(`http://localhost:8000/posts/${id}`)
      .then((res) => {
        settopic(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return (

    <SafeAreaView>
      <ScrollView>

        <View>
          <marquee style={Styles.Title}>VIEW POST</marquee>


        </View>
        
         


         
              <View  style={Styles.box}>
              <Text style={Styles.label1}> Topic    :<Text>{topic.topic}</Text></Text>
              <Text style={Styles.label2}> Category :{topic.category}</Text>
              <Text style={Styles.label2}> Relevant Link :{topic.relevantLink}</Text>
              <Text style={Styles.label2}> Description :{topic.description}</Text>
            </View>
            <TouchableOpacity style={Styles.defaultButton1} >
                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black', textAlign: 'center' }} onPress={() =>
                      navigation.navigate('DELETE POST PAGE')
                    }
                    > NEXT</Text>
                  </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>


  )
}

const Styles = StyleSheet.create({

  Title: {

    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    backgroundColor: '#19bd47',
    height: 40,
    marginLeft: 20,
    marginRight: 20,
    borderColor:'black',
    borderWidth:1


  },
  label1: {

    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
    backgroundColor: 'darkwhite',
    marginLeft:'20'



  },
  label2: {

    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 40,
    backgroundColor: 'darkwhite',
    marginLeft:'20'



  },
  defaultButton1: {

    backgroundColor: '#1fbf3f',
    marginTop: 20,
    marginLeft: 130,
    marginRight: 30,
    padding: 10,
    borderRadius: 15,
    fontWeight: 'bold',
    fontSize: 16

  },
  box:{
    height:300,
    width:350,
    marginLeft:5,
    marginRight:10,
    backgroundColor:'#ccffe6',
    marginTop:120,
    borderColor:'green',
    borderWidth:2

  }

})

export default PostViewById