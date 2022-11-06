import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from "react-native";
import login from '../../../assets/login.png';
import AppBarComponent from "../Common/AppBarComponent";

const Login = () => {

    return (

        <SafeAreaView style={{ felix: 1 }}>
            <ScrollView>
                <AppBarComponent/>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={login} style={styles.BorderClass} />
                </View>

                <View style={styles.container}>
                <Text style={styles.myTitle}>E- Learner</Text>
                </View>
                
                <View>
                <Text style={styles.label}>User Name</Text>
                <TextInput style={styles.inputfields} placeholder='Enter your Email'/>
                </View>

                <View>
                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.inputfields} secureTextEntry='true' placeholder="Enter your Password"/>
                    
                </View>
            <View>
            <TouchableOpacity>
                <Text style={styles.labeltext}>Forget Password ?</Text>
            </TouchableOpacity>
           </View>

           <View>
            <TouchableOpacity style={styles.defaultButton} >
                <Text style={{fontWeight:'bold' , fontSize:20, color:'black' ,textAlign:'center'}}> LOGIN</Text>
            </TouchableOpacity>
            </View>

            <View>
            <TouchableOpacity style={styles.defaultButton1} >
                <Text style={{fontWeight:'bold' , fontSize:20, color:'black' ,textAlign:'center'}}> SIGNIN</Text>
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
        color: '#2fa347'

    },

    BorderClass:
    {

        width: 360,
        height: 250,
        borderWidth: 2,
        borderColor: 'black',
    },
    label: {
        fontSize: 20,
        marginTop:10,
        marginLeft:-160,
        fontWeight: "bold",
        textAlign: "center",
        color: 'black'

    },
    labeltext:{
      fontSize:20,
      fontWeight:'bold',
      marginLeft:80,
      color:'red',
      marginTop:10

    },
    inputfields:{
     
        borderColor:'a7a7',
        borderWidth:1,
        padding:10,
        fontSize:16,
        borderRadius:10,
        marginTop:8,
        marginLeft:30,
        marginRight:30,
        
    },
    defaultButton:{
      
       backgroundColor:'#1fbf3f',
       marginTop:10,
       marginLeft:50,
       marginRight:50,
       padding:10,
       borderRadius:15


    },
    defaultButton1:{
      
        backgroundColor:'#a1f0b0',
        marginTop:10,
        marginLeft:50,
        marginRight:50,
        padding:10,
        borderRadius:15
 
 
     }


})

export default Login;