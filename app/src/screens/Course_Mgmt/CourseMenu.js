import React from 'react'
import { AppBar, Text } from '@react-native-material/core';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import AppBarComponent from '../Common/AppBarComponent';

const CourseMenu = () => {
    return (
        <SafeAreaView >
            <ScrollView >

                <View style={styles.view}>
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



            </ScrollView >
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    view: {
        marginTop: 25
    }
})

export default CourseMenu