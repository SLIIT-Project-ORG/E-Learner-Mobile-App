import React, {useState} from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import axios from "axios";


const SignIn = () => {

    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [mobilenumber, setmobilenumber] = useState("");
    const [address, setaddress] = useState("");

    function sendData(e) {
        e.preventDefault();
        const newuser = {
            firstname, lastname, username, email, password, mobilenumber, address
        };

        axios
            .post("http://localhost:8000/signin/insert/", newuser)
            .then(() => {
                alert(" Successfully Registered");



            })
            .catch((err) => {
                alert(err);
            });
    }




    return (

        <SafeAreaView style={{ felix: 1 }}>
            <ScrollView>

                <View>
                    <Text style={styles.label}>First Name</Text>
                    <TextInput style={styles.inputfields} onChange={(e) => {
                        setfirstname(e.target.value);
                    }} />
                </View>


                <View>
                    <Text style={styles.label}>Last Name</Text>
                    <TextInput style={styles.inputfields} onChange={(e) => {
                        setlastname(e.target.value);
                    }} />
                </View>

                <View>
                    <Text style={styles.label}>User Name</Text>
                    <TextInput style={styles.inputfields} onChange={(e) => {
                        setusername(e.target.value);
                    }} />
                </View>

                <View>
                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.inputfields} placeholder="Enter your Email" onChange={(e) => {
                        setemail(e.target.value);
                    }} />
                </View>

                <View>
                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.inputfields} secureTextEntry='true' placeholder="Enter your Password" onChange={(e) => {
                        setpassword(e.target.value);
                    }} />

                </View>

                <View>
                    <Text style={styles.label}>Mobile Number</Text>
                    <TextInput style={styles.inputfields} onChange={(e) => {
                        setmobilenumber(e.target.value);
                    }} />
                </View>

                <View>
                    <Text style={styles.label}>Address</Text>
                    <TextInput style={styles.inputfields} onChange={(e) => {
                        setaddress(e.target.value);
                    }} />
                </View>


                <View>
                    <TouchableOpacity style={styles.defaultButton} >
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black', textAlign: 'center' }} onPress={sendData}>REGISTER</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.defaultButton1} >
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black', textAlign: 'center' }}> CANCEL</Text>
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
        marginTop: 10,
        marginLeft: -160,
        fontWeight: "bold",
        textAlign: "center",
        color: 'black'

    },
    labeltext: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 80,
        color: 'red',
        marginTop: 5

    },
    inputfields: {

        borderColor: 'gray',
        borderWidth: 1,
        padding: 8,
        fontSize: 16,
        borderRadius: 10,
        marginTop: 5,
        marginLeft: 30,
        marginRight: 30,

    },
    defaultButton: {

        backgroundColor: '#1fbf3f',
        marginTop: 8,
        marginLeft: 50,
        marginRight: 50,
        padding: 8,
        borderRadius: 15


    },
    defaultButton1: {

        backgroundColor: '#a1f0b0',
        marginTop: 8,
        marginLeft: 50,
        marginRight: 50,
        padding: 8,
        borderRadius: 15


    }


})

export default SignIn;