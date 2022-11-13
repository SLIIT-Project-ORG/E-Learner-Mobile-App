import React, { useState } from 'react'
import { SafeAreaView, ScrollView, View, StyleSheet, Text, TextInput, Image, TouchableOpacity, } from 'react-native'
import table from '../../../assets/newpost.gif';



import axios from 'axios';



const AddPost = ({ navigation }) => {



    const [topic, settopic] = useState("");
    const [category, setcategory] = useState("");
    const [relevantLink, setrelevantLink] = useState("");
    const [description, setdescription] = useState("");
   

    function sendData(e) {
        e.preventDefault();
        const newpost = {
            topic, category, relevantLink, description
        };

        console.log(newpost);

        axios
            .post("http://localhost:8000/posts/", newpost)
            .then(() => {
                alert("Post Successfully Added");
            })
            .catch((err) => {
                alert(err);
            });
    }



    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <marquee style={styles.title}>ADD POST</marquee>
                    <View style={styles.container}>
                        <Image source={table} style={styles.BorderClass} />
                    </View>

                    
                </View>


                <View>
                    <Text style={styles.label}>Topic</Text>
                    <TextInput style={styles.inputfields} name="topic" id="topic" onChange={(e) => {
                        settopic(e.target.value);
                    }} />
                </View>


                <View>
                    <Text style={styles.label}>Category</Text>
                    <TextInput style={styles.inputfields} name="category" id="category" onChange={(e) => {
                        setcategory(e.target.value);
                    }} />
                </View>


                <View>
                    <Text style={styles.label}>Relevant Link</Text>
                    <TextInput style={styles.inputfields} name="relevantLink" id="relevantLink" onChange={(e) => {
                        setrelevantLink(e.target.value);
                    }} />
                </View>

                <View>
                    <Text style={styles.label}>Description</Text>
                    <textarea style={styles.inputfields} name="description" id="description"
                        onChange={(e) => {
                            setdescription(e.target.value);
                        }}
                    />
                </View>


                <View>
                    <TouchableOpacity style={styles.defaultButton} >
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black', textAlign: 'center' }} onPress={sendData}
                        > SUBMIT</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.defaultButton1} >
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black', textAlign: 'center' }} onPress={() =>
                            navigation.navigate('VIEW POST PAGE')
                        } >VIEW</Text>
                    </TouchableOpacity>
                </View>



            </ScrollView>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({

    title: {

        fontSize: 30,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        backgroundColor: '#1fbf3f',
        marginTop: 0,
        marginLeft: 20,
        marginRight: 20,
        borderColor: 'black',
        borderWidth: 1

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

    inputfields: {

        borderColor: 'a7a7',
        borderWidth: 1,
        padding: 8,
        fontSize: 16,
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,

    },
    BorderClass:
    {
        width: 100,
        height: 100,
        borderWidth: 1,
        width: 150,
        height: 150,
        borderWidth: 4,
        borderColor: 'black',
        marginTop: 10,
        marginLeft: 10
    },
    defaultButton: {

        backgroundColor: '#1fbf3f',
        marginTop: 10,
        marginLeft: 50,
        marginRight: 50,
        padding: 10,
        borderRadius: 15


    },
    defaultButton1: {

        backgroundColor: '#a1f0b0',
        marginTop: 5,
        marginTop: 10,
        marginLeft: 50,
        marginRight: 50,
        padding: 10,
        borderRadius: 15


    },
    defaultButton2: {

        backgroundColor: '#a1f0b0',
        marginLeft: 180,
        marginRight: 10,
        marginTop: -100,
        padding: 9,
        padding: 10,
        borderRadius: 15
    }

})
export default AddPost;
