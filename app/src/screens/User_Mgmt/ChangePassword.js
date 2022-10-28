import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from "react-native";


const ChangePassword = () => {

    return (

        <SafeAreaView style={{ felix: 1 }}>
            <ScrollView>
               
                <View style={styles.container}>
                <Text style={styles.myTitle}>Change Password</Text>
                </View>
                
                 <View>
                    <Text style={styles.label}>Current Password</Text>
                    <TextInput style={styles.inputfields} secureTextEntry='true' />
               </View>

               <View>
                    <Text style={styles.label}>New Password</Text>
                    <TextInput style={styles.inputfields} secureTextEntry='true' />
               </View>


               <View>
                    <Text style={styles.label}>New Password</Text>
                    <TextInput style={styles.inputfields} secureTextEntry='true' placeholder="Confirm your Password"/>
               </View>
         

           <View>
            <TouchableOpacity style={styles.defaultButton} >
                <Text style={{fontWeight:'bold' , fontSize:20, color:'black' ,textAlign:'center'}}> SUBMIT</Text>
            </TouchableOpacity>
            </View>

            <View>
            <TouchableOpacity style={styles.defaultButton1} >
                <Text style={{fontWeight:'bold' , fontSize:20, color:'black' ,textAlign:'center'}}> CANCEL</Text>
            </TouchableOpacity>
            </View>
                
            </ScrollView>
        </SafeAreaView> 


    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
    },
    myTitle: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        color: 'black',
        marginTop:20

    },

    
    label: {
        fontSize: 20,
        marginTop:30,
        marginLeft:-140,
        fontWeight: "bold",
        textAlign: "center",
        color: 'black'

    },
    
    inputfields:{
     
        borderColor:'a7a7',
        borderWidth:1,
        padding:15,
        fontSize:16,
        borderRadius:10,
        marginTop:10,
        marginLeft:30,
        marginRight:30,
        
    },
    defaultButton:{
      
       backgroundColor:'#1fbf3f',
       marginTop:60,
       marginLeft:50,
       marginRight:50,
       padding:15,
       borderRadius:15


    },
    defaultButton1:{
      
        backgroundColor:'gray',
        marginTop:20,
        marginLeft:50,
        marginRight:50,
        padding:15,
        borderRadius:15
 
 
     }


})

export default ChangePassword;