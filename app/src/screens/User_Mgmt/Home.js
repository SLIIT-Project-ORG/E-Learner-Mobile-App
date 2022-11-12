import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import home from '../../../assets/home.png';
import article from '../../../assets/article.png'
import video from '../../../assets/video.png';
import courses from '../../../assets/courses.png';
import share from '../../../assets/share.png'


const Home = ({navigation}) => {

    return (

        <SafeAreaView style={{ felix: 1 }}>
            <ScrollView>
              
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={home} style={styles.BorderClass} />

                </View>


                <View >
                    <TouchableOpacity>
                        <Image source={article} style={styles.BorderButton1} />

                    </TouchableOpacity>

             
                </View>
                <View >
                    <TouchableOpacity>

                        <Image source={courses} style={styles.BorderButton3} />
                    </TouchableOpacity>
                </View>

                <View >
                    <TouchableOpacity>
                        <Image source={video} style={styles.BorderButton2} />

                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity onPress={() =>
                      navigation.navigate('ADD POST PAGE')
          }>

                        <Image source={share} style={styles.BorderButton4} />
                    </TouchableOpacity>
                </View>


                <View >
                    <TouchableOpacity>

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
        marginTop: 160

    },
    BorderClass:
    {

        width: 360,
        height: 300,
        borderWidth: 4,
        borderColor: 'darkgreen',
    },

    BorderButton1:
    {

        width: 170,
        height: 150,
        marginTop: 30,
        marginLeft: 10,
        borderWidth: 4,
        borderColor: '#00b3b3',
        borderRadius: 12,
        justifyContent: 'center'
    },


    BorderButton3:
    {

        width: 170,
        height: 150,
        marginTop: -150,
        marginLeft: 185,
        borderWidth: 4,
        borderColor: '#00b3b3',
        borderRadius: 12,

    },

    BorderButton2:
    {

        width: 170,
        height: 150,
        marginTop: 15,
        marginLeft: 10,
        borderWidth: 4,
        borderColor: '#00b3b3',
        borderRadius: 12,
        justifyContent: 'center'
    },
    BorderButton4:
    {

        width: 170,
        height: 150,
        marginTop: -150,
        marginLeft: 185,
        borderWidth: 4,
        borderColor: '#00b3b3',
        borderRadius: 12,

    },

})

export default Home;