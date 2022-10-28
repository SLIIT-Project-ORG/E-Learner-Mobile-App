import React from 'react'
import { SafeAreaView, ScrollView, View, StyleSheet, Text, TouchableOpacity,Image } from 'react-native';
import AppBarComponent from '../Common/AppBarComponent';
import java from '../../../assets/CM_java.png'

const Icourses = () => {
  return (
    <SafeAreaView>
      <ScrollView>
   
     <AppBarComponent/>
    
        <View style={styles.box1}>
          <Text style={styles.title}>INTRODUCTION</Text>
          <Text style={styles.title1}>Catogory Programming </Text>
          <Text style={styles.title2}>Created By Admin </Text>
        </View>

        
        <View style={styles.box} >
            <View><Image source={java} style={styles.BorderClass1} ></Image></View>
           
            <View><Text style={styles.label}>INTRODUCTION</Text></View>

          
        </View>

        <View>
            <TouchableOpacity style={styles.defaultButton1} >
              <Text style={{ fontWeight: 'bold', fontSize: 26, color: 'white', textAlign: 'center' }}> COMPLETED </Text>
            </TouchableOpacity>
          </View>
       

      </ScrollView>
    </SafeAreaView>

  )
}
const styles = StyleSheet.create({

  title: {

    fontSize: 30,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
   

  },
   title1: {

    fontSize: 25,
    textAlign: 'center',
    color: 'black',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
  

  },
  title2: {

    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 60,
    marginTop: 10,
  

  },
  container: {
    backgroundColor: 'white',
  },
  label: {
    fontSize: 20,
    marginTop: -1,
    marginLeft: -120,
    fontWeight: "bold",
    textAlign: "center",
    color: 'black'

  },
  box: {

    backgroundColor: 'white',
    height: 400,
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
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    padding: 15,
    borderRadius: 10,
    fontWeight: 'bold',
   

  },

  BorderClass1:
  {

      width: 100,
      height: 100,
      borderWidth: 2,
      borderColor: 'white',
      borderRadius:10,
      marginTop:10,
      marginLeft:10,
      marginRight:10
  },
  box1: {

    backgroundColor: 'white',
    height: 150,
    width: 340,
    borderColor: 'black',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 50,
    
    borderWidth: 2,


  }





})
export default Icourses;
