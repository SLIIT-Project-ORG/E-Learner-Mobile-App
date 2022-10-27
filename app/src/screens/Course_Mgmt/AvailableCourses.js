import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import home from '../../../assets/home.png';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const AvailableCourses = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <AppBar position="fixed" color="primary">
                  <Text>Hello</Text>
                </AppBar>
                <View>
                    <Text style={styles.title}>AVAILABLE COURSES</Text>
                </View>
                <View style={styles.box}>
                    <View>
                        <Image source={home} style={styles.BorderClass} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'darkWhite',
        height: 130,
        width: 340,
        borderColor: '#EDEDED',
        marginTop: 15,
        marginLeft: 10,
        marginRight: 50,
        borderRadius: 10,
        borderWidth: 2
    },

    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: '#1fbf3f',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        padding: 10,
        borderWidth: 4
    },

    container: {
        backgroundColor: 'white',
    },

    BorderClass:
    {

        width: 100,
        height: 100,
        borderWidth: 3,
        borderColor: 'black',
        borderRadius:10,
        marginLeft:10,
        marginTop:15
    }
})

export default AvailableCourses