import React from 'react';
import { AppBar, Text } from '@react-native-material/core';
import { SafeAreaView, ScrollView, StyleSheet, View,Image, TouchableOpacity } from 'react-native';
import AppBarComponent from '../Common/AppBarComponent';
import Course from '../../../assets/CM_course.jpg';
import course1 from '../../../assets/Courses1.png';
import course2 from '../../../assets/CM_course2.png'

const CourseMenu = () => {
    return (
        <SafeAreaView>   
            <ScrollView>
            <View >
            <AppBarComponent />
            <View style={styles.container}>
                <Text style={styles.myTitle}>COURSES</Text>
                </View>

                <View>
                <Image Acourses></Image>
                </View> 

                <TouchableOpacity>
                <View>
                <Image source={course1} style={styles.BorderClass1}></Image>
                <Text style={styles.label}>My Courses</Text>
                </View>   
                </TouchableOpacity>


                <TouchableOpacity>
                <View>
                <Image source={course2} style={styles.BorderClass2}></Image>
                <Text style={styles.label1}>View Courses</Text>
                </View>   
                </TouchableOpacity>

                
                <TouchableOpacity>
                   <View > <Text style={styles.defaultButton1}> GO BACK</Text></View> 
                </TouchableOpacity>
                </View>

            
        
            </ScrollView>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#33cc33',
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        borderColor:'black',
        borderWidth:2
         
    },
    myTitle: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginRight:20,
        color: 'black',
        padding:10,
        
    },

    label: {
        fontSize: 20,
        marginTop:20,
        marginLeft:-160,
        fontWeight: "bold",
        textAlign: "center",
        color: 'black'

    },

    label1: {
        fontSize: 20,
        marginTop:20,
        marginLeft:140,
        fontWeight: "bold",
        textAlign: "center",
        color: 'black'

    },
    BorderClass:
    {

        width: 340,
        height: 300,
        borderWidth: 2,
        borderColor: 'black',
        marginTop:10,
        marginLeft:10,
        marginRight:10
    },

    BorderClass1:
    {

        width: 150,
        height: 150,
        borderWidth: 4,
        borderColor: 'black',
        marginTop:30,
        marginLeft:10,
        marginRight:10,
        borderRadius:20
    },

    BorderClass2:
    {

        width: 150,
        height: 150,
        borderWidth: 4,
        borderColor: 'black',
        marginTop:-195,
        marginLeft:190,
        marginRight:10,
        borderRadius:20
    },

    defaultButton1:{
      
        backgroundColor:'#33cc33',
        marginTop:10,
        marginLeft:20,
        marginRight:20,
        padding:10,
       fontSize:20,
       fontWeight:'bold',
        marginBottom:10,
        textAlign:'center'

 
 
     }

})

export default CourseMenu