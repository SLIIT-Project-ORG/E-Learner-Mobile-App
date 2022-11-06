import React from 'react';
import { SafeAreaView, ScrollView, View ,StyleSheet,Text } from 'react-native';


const PostViewById=()=>{

  return(

  <SafeAreaView>
    <ScrollView>
        <View>
            <Text style ={Styles.Title}>VIEW POST</Text>
        </View>
    </ScrollView>
  </SafeAreaView>


)}

const Styles = StyleSheet.create({

   Title:{
    
    fontSize:20,
    fontWeight:'bold',
    color:'black',
    backgroundColor:'#19bd47'

   }

})

export default PostViewById