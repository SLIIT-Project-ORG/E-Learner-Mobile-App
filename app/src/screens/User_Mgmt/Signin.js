import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity} from "react-native";


const SignIn = () => {

    return (

        <SafeAreaView style={{ felix: 1 }}>
            <ScrollView>
               
             <View>
                <Text style={styles.label}>First Name</Text>
                <TextInput style={styles.inputfields} />
                </View>


                <View>
                <Text style={styles.label}>Last Name</Text>
                <TextInput style={styles.inputfields} />
                </View>

                <View>
                <Text style={styles.label}>User Name</Text>
                <TextInput style={styles.inputfields} />
                </View>

                <View>
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.inputfields} placeholder="Enter your Email" />
                </View>
              
                <View>
                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.inputfields} secureTextEntry='true' placeholder="Enter your Password"/>
                    
                </View>

                <View>
                <Text style={styles.label}>Mobile Number</Text>
                <TextInput style={styles.inputfields} />
                </View>

                <View>
                <Text style={styles.label}>Address</Text>
                <TextInput style={styles.inputfields} />
                </View>
           

           <View>
            <TouchableOpacity style={styles.defaultButton} >
                <Text style={{fontWeight:'bold' , fontSize:20, color:'black' ,textAlign:'center'}}>REGISTER</Text>
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
        color: '#2fa347'

    },

    BorderClass:
    {

        width: 360,
        height: 300,
        borderWidth: 4,
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
      marginTop:5

    },
    inputfields:{
     
        borderColor:'gray',
        borderWidth:1,
        padding:10,
        fontSize:16,
        borderRadius:10,
        marginTop:5,
        marginLeft:30,
        marginRight:30,
        
    },
    defaultButton:{
      
       backgroundColor:'#1fbf3f',
       marginTop:10,
       marginLeft:50,
       marginRight:50,
       padding:15,
       borderRadius:15


    },
    defaultButton1:{
      
        backgroundColor:'#a1f0b0',
        marginTop:10,
        marginLeft:50,
        marginRight:50,
        padding:15,
        borderRadius:15
 
 
     }


})

export default SignIn ;