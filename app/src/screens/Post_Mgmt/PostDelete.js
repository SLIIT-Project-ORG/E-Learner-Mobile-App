import React from 'react'
import { SafeAreaView, ScrollView, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import AppBarComponent from '../Common/AppBarComponent'


const PostDelete = () => {
  return (
    <SafeAreaView>
      <ScrollView>
   
     <AppBarComponent/>
    
        <View style={styles.container}>
          <Text style={styles.title}>New POST</Text>
        </View>


        <View style={styles.box} >

          <View>
            <TouchableOpacity style={styles.defaultButton1} >
              <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white', textAlign: 'center' }}> UPDATE</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.defaultButton2} >
              <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white', textAlign: 'center' }}> DELETE</Text>
            </TouchableOpacity>
          </View>

        </View>



        
        <View style={styles.box} >

          <View>
            <TouchableOpacity style={styles.defaultButton1} >
              <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white', textAlign: 'center' }}> UPDATE</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.defaultButton2} >
              <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white', textAlign: 'center' }}> DELETE</Text>
            </TouchableOpacity>
          </View>

        </View>


        
        <View style={styles.box} >

          <View>
            <TouchableOpacity style={styles.defaultButton1} >
              <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white', textAlign: 'center' }}> UPDATE</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.defaultButton2} >
              <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white', textAlign: 'center' }}> DELETE</Text>
            </TouchableOpacity>
          </View>

        </View>

        
        <View style={styles.box} >

          <View>
            <TouchableOpacity style={styles.defaultButton1} >
              <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white', textAlign: 'center' }}> UPDATE</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.defaultButton2} >
              <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white', textAlign: 'center' }}> DELETE</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>

  )
}
const styles = StyleSheet.create({

  title: {

    fontSize: 40,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: '#1fbf3f',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10

  },
  container: {
    backgroundColor: 'white',
  },
  label: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: -160,
    fontWeight: "bold",
    textAlign: "center",
    color: 'black'

  },
  box: {

    backgroundColor: 'lightgray',
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
    marginTop: 10,
    marginLeft: 120,
    marginRight: 20,
    padding: 10,
    borderRadius: 15,
    fontWeight: 'bold'

  },

  defaultButton2: {

    backgroundColor: 'darkred',
    marginTop: 10,
    marginLeft: 120,
    marginRight: 20,
    padding: 10,
    borderRadius: 15,
    fontWeight: 'bold'

  }





})
export default PostDelete;
