import React from 'react'
import { SafeAreaView, ScrollView,View,StyleSheet,Text,Image,TouchableOpacity} from 'react-native'
import login from '../../../assets/login.png'
const PostViewById = ()=> {
  return (
    <SafeAreaView>
        <ScrollView>
            <View>
               <Text style={styles.title}>VIEW POST</Text>
            </View>
            <View  style={styles.container}>
               <Image source={login} style={styles.BorderClass}/>
            </View>
             

            <View>
                <Text style={styles.label1}>Topic :</Text>
                <Text style={styles.label1}>Category :</Text>
                <Text style={styles.label1}>Link :</Text>
                <Text style={styles.label2}>Description :</Text>
                </View>

            <View>
            <View>
            <TouchableOpacity style={styles.defaultButton} >
                <Text style={{fontWeight:'bold' , fontSize:20, color:'black' ,textAlign:'center'}}> UPDATE </Text>
            </TouchableOpacity>
            </View>

            <View>
            <TouchableOpacity style={styles.defaultButton1} >
                <Text style={{fontWeight:'bold' , fontSize:20, color:'black' ,textAlign:'center'}}> CANCEL</Text>
            </TouchableOpacity>
            </View>

                
                </View>    
            
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    title:{
     
        fontSize:40,
        textAlign:'center',
        color:'black',
        fontWeight:'bold',
        backgroundColor:'#1fbf3f',
        marginLeft:10,
        marginRight:10,
        marginTop:10


    },
    BorderClass:
    {

        width: 340,
        height: 200,
        borderWidth: 4,
        borderColor: 'black',
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        borderRadius:20
    },
    label1: {
        fontSize: 20,
        marginTop:20,
        marginLeft:-160,
        fontWeight: "bold",
        textAlign: "center",
        color: 'black',
        marginBottom:10

    },

    label2: {
        fontSize: 20,
        marginTop:30,
        marginLeft:-160,
        fontWeight: "bold",
        textAlign: "center",
        color: 'black',
        marginBottom:50

    },
    defaultButton:{
      
        backgroundColor:'#1fbf3f',
        marginTop:20,
        marginLeft:50,
        marginRight:50,
        padding:15,
        borderRadius:15,
        marginBottom:15
 
 
     },
     defaultButton1:{
      
        backgroundColor:'gray',
        marginTop:10,
        marginLeft:50,
        marginRight:50,
        padding:15,
        borderRadius:15
 
 
     },


})
export default PostViewById