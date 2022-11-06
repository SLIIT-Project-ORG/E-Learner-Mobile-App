import React from "react";
import { SafeAreaView, ScrollView, Text, View, StyleSheet, TouchableOpacity,Image } from "react-native";
import AppBarComponent from "../Common/AppBarComponent";
import table from '../../../assets/article.png'

const ArticleView = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <AppBarComponent/>
      <View style={Styles.container}>
          <Text style={Styles.title}>ARTICLE VIEW</Text>
        </View>

         <View style={Styles.box}>
            <View><Image source={table} style={Styles.BorderClass1} ></Image>
            </View>
           
            <View><Text style={Styles.label}>IOT things</Text></View>

          <View>
            <TouchableOpacity style={Styles.defaultButton1} >
              <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black', textAlign: 'center' }}> DOWNLOAD NOW</Text>
            </TouchableOpacity>
          </View>


          <View>
            <TouchableOpacity style={Styles.defaultButton2} >
              <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black', textAlign: 'center' }}> VIEW</Text>
            </TouchableOpacity>
          </View>
         </View>

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
    backgroundColor: 'green',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    padding:10

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

    backgroundColor: 'lightgray',
    height: 150,
    width: 340,
    borderColor: 'gray',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 50,
    borderRadius: 10,
    borderWidth: 2,


  },
  defaultButton1: {

    backgroundColor: '#e699ff',
    marginTop: -60,
    marginLeft: 130,
    marginRight: 30,
    padding: 10,
    borderRadius: 15,
    fontWeight: 'bold',
    fontSize:16

  },

  defaultButton2: {

    backgroundColor: '#99e6ff',
    marginTop: -10,
    marginLeft: 130,
    marginRight: 30,
    padding: 10,
    borderRadius: 15,
    fontWeight: 'bold',
    fontSize:16

  },

  BorderClass1:
  {

      width: 100,
      height: 100,
      borderWidth: 2,
      borderColor: 'darkgray',
      borderRadius:10,
      marginTop:9,
      marginLeft:10,
      marginRight:10
  }



})
export default ArticleView 