import React from 'react';
import { AppBar, Text } from '@react-native-material/core';
import { SafeAreaView, ScrollView, StyleSheet, View, Image } from 'react-native';

import steps from '../../../assets/steps.png';
import AppBarComponent from '../Common/AppBarComponent';

const CourseStep = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <AppBarComponent />
        <View>
          <Image source={steps} style={styles.BorderClass}></Image>
        </View>
        <View style={styles.box2}>
          <View style={styles.box1}>
            <Text style={styles.label}>1</Text>
            <View style={styles.box3}>
            </View>

          </View>
        </View>

      </ScrollView>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({


  BorderClass:
  {

    width: 340,
    height: 200,
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },

  box1: {

    backgroundColor: '#34a1eb',
    height: 80,
    width: 80,
    borderColor: 'black',
    marginLeft: 10,
    marginRight: 20,
    borderWidth: 2,
    marginTop: 10,



  },

  box2: {

    backgroundColor: 'gray',
    height: 120,
    width: 340,
    borderColor: 'black',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 20,
    borderWidth: 2,


  },

  box3: {

    backgroundColor: 'gray',
    height: 80,
    width: 220,
    borderColor: 'black',
    marginTop: - 79,
    marginLeft: 85,
    borderRadius: 2,

    borderWidth: 2,

  },

  label: {

    fontSize: 60,
    color: 'black',
    textAlign: 'center'


  }




})

export default CourseStep