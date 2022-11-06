import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import logo from '../../../assets/logo.png';
import AppBarComponent from "../Common/AppBarComponent";

const ForgetPassword = () => {

    return (

        <SafeAreaView style={{ felix: 1 }}>
            
            <ScrollView>
                <AppBarComponent/>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={logo} style={styles.BorderClass} />
                </View>

                <View style={styles.container}>
                    <Text style={styles.myTitle}>Forgot Password ?</Text>
                </View>

                <View>
                    <Text style={styles.label}>Enter Email</Text>
                    <TextInput style={styles.inputfields} placeholder='Enter your Email' />
                </View>



                <View>
                    <TouchableOpacity style={styles.defaultButton} >
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black', textAlign: 'center' }}> Submit</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.defaultButton1} >
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black', textAlign: 'center' }}> Cancel</Text>
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
        marginTop: 20

    },

    BorderClass:
    {

        width: 360,
        height: 300,
        borderWidth: 4,
        borderColor: 'white',
    },
    label: {
        fontSize: 20,
        marginTop: 20,
        marginLeft: -160,
        fontWeight: "bold",
        textAlign: "center",
        color: 'black'

    },
   
    inputfields: {

        borderColor: 'a7a7',
        borderWidth: 1,
        padding: 15,
        fontSize: 16,
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,

    },
    defaultButton: {

        backgroundColor: '#1fbf3f',
        marginTop: 40,
        marginLeft: 50,
        marginRight: 50,
        padding: 15,
        borderRadius: 15


    },
    defaultButton1: {

        backgroundColor: 'gray',
        marginTop: 10,
        marginLeft: 50,
        marginRight: 50,
        padding: 15,
        borderRadius: 15


    }


})

export default ForgetPassword;