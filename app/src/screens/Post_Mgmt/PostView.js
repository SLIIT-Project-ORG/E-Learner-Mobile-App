import React from "react";
import { SafeAreaView, ScrollView, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import AppBarComponent from "../Common/AppBarComponent";


const PostView = () => {
  return (
    <SafeAreaView>
      <ScrollView>

      <AppBarComponent/>
    
        <View>
          <Text style={Styles.title}>POST VIEW</Text>
        </View>


        <View style={Styles.box} >

          <View>
            <TouchableOpacity style={Styles.defaultButton1} >
              <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black', textAlign: 'center' }}> VIEW</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={Styles.defaultButton2} >
              <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black', textAlign: 'center' }}> DOWNLOAD</Text>
            </TouchableOpacity>
          </View>

        </View>



       
        <View style={Styles.box} >

          <View>
            <TouchableOpacity style={Styles.defaultButton1} >
              <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black', textAlign: 'center' }}> VIEW</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={Styles.defaultButton2} >
              <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black', textAlign: 'center' }}> DOWNLOAD</Text>
            </TouchableOpacity>
          </View>

        </View>




        
        <View style={Styles.box} >

          <View>
            <TouchableOpacity style={Styles.defaultButton1} >
              <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black', textAlign: 'center' }}> VIEW</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={Styles.defaultButton2} >
              <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black', textAlign: 'center' }}> DOWNLOAD</Text>
            </TouchableOpacity>
          </View>

        </View>



        
        <View style={Styles.box} >

          <View>
            <TouchableOpacity style={Styles.defaultButton1} >
              <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black', textAlign: 'center' }}> VIEW</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={Styles.defaultButton2} >
              <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black', textAlign: 'center' }}> DOWNLOAD</Text>
            </TouchableOpacity>
          </View>

        </View>


      </ScrollView>
    </SafeAreaView>
  )
}

const Styles = StyleSheet.create({

  title: {

    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#1fbf3f',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    padding: 10,



  },
  box: {

    backgroundColor: 'lightgray',
    height: 150,
    width: 340,
    borderColor: 'black',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 50,
    borderRadius: 10,
    borderWidth: 2,


  },
  defaultButton1: {

    backgroundColor: 'blue',
    marginTop: 10,
    marginLeft: 120,
    marginRight: 20,
    padding: 10,
    borderRadius: 15,
    fontWeight: 'bold'

  },

  defaultButton2: {

    backgroundColor: 'lightgreen',
    marginTop: 10,
    marginLeft: 120,
    marginRight: 20,
    padding: 10,
    borderRadius: 15,
    fontWeight: 'bold'

  }







})
export default PostView