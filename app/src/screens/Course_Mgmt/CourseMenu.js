import React from 'react'
import { AppBar, Text } from '@react-native-material/core';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import AppBarComponent from '../Common/AppBarComponent';

const CourseMenu = () => {
    return (
        <View style={styles.view}>
            <AppBarComponent />
        </View>
    )
}

const styles = StyleSheet.create({
    view:{
        marginTop:25
    }
})

export default CourseMenu