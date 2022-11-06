import React from 'react'
import { ScrollView, View, StyleSheet, Text,Image,TouchableOpacity, SafeAreaView } from 'react-native'
import AppBarComponent from '../Common/AppBarComponent'
import table from '../../../assets/table.png'

const PostDelete = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <AppBarComponent/>
        <View style={Styles.container}>
          <Text style={Styles.title}>MY VIEW</Text>
        </View>

         <View style={Styles.box}>
            <View><Image source={table} style={Styles.BorderClass1} ></Image>
            </View>
           
            <View><Text style={Styles.label}>Periodic table</Text></View>

          <View>
            <TouchableOpacity style={Styles.defaultButton1} >
              <Text style={{ fontWeight:'bold', fontSize: 20, color: 'black', textAlign: 'center' }}> DELETE</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={Styles.defaultButton2} >
              <Text style={{  fontWeight:'bold', fontSize: 20, color: 'black', textAlign: 'center' }}> UPDATE</Text>
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
    backgroundColor: '#1fbf3f',
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

    backgroundColor: '#ff6666',
    marginTop: -60,
    marginLeft: 140,
    marginRight: 30,
    padding: 5,
    borderRadius: 10,
    fontWeight: 'bold',
    fontSize:16

  },

  defaultButton2: {

    backgroundColor: '#53ff1a',
    marginTop: -15,
    marginLeft: 140,
    marginRight: 30,
    padding: 5,
    borderRadius: 10,
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
      marginTop:10,
      marginLeft:10,
      marginRight:10
  }



})


export default PostDelete