import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Image, Text } from "react-native";
import start from '../../../assets/start.png';
import background from '../../../assets/background.gif';
import learn from '../../../assets/happylearn.gif'
import { Button } from "react-native-elements";


const GetStarted = ({navigation}) => {

    return (

        <SafeAreaView style={{ felix: 1 }}>
            <ScrollView>
               
            <View>
                    <Image source={learn} style={styles.BorderClass}></Image>
                </View>
                <View>
                    <Image source={background} style={styles.BorderClass}></Image>
                </View>
               <View>
                <Text style={styles.button} onPress={() =>
                      navigation.navigate('LOGIN PAGE')
          } >GET STARTED </Text>
               </View>

               </ScrollView>
        </SafeAreaView>


    )
}

const styles = StyleSheet.create({

   
    BorderClass:
    {

        width: 360,
        height: 300,
       
    },
    button:{
      
        width:300,
        height:50,
        marginTop:10,
        marginLeft:20,
        backgroundColor:'#d98cb3',
        textAlign:'center',
        
        fontSize:20,
        fontWeight:'bold',
        borderColor:'#ac3973',
        borderRadius:10,

        borderWidth:3

    }

    
})

export default GetStarted;