import React from 'react'
import { ScrollView, ScrenAreaView, View, StyleSheet, Text } from 'react-native'


const PostDelete = () => {
  return (
    <ScrenAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>NEW POST</Text>
        </View>
      </ScrollView>
    </ScrenAreaView>
  )
}
const styles = StyleSheet.create({

  title: {

    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'black',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    padding: 10,

  },
  container: {
    backgroundColor: 'white',
  }



})


export default PostDelete