import React from "react";
import { View,Image, ScrollView, Text, StyleSheet } from "react-native";
import CMMenuImage from "../../../assets/CM-MenuImage.jpg";

const CourseMenu = () => {
    return (
        <ScrollView style={styles.scrollView}>
           <View style={styles.view}>
                <Text>Hellow</Text>
           </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView:{
        flex:1
    },
    view:{
        backgroundColor:'red',
        width:100,
        height:400
    }
})

export default CourseMenu;