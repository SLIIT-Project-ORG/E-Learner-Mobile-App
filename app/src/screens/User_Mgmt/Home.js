import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import home from '../../../assets/home.png';
import articles from '../../../assets/articles.png';
import video from '../../../assets/video.png';
import courses from '../../../assets/courses.png';
import share from '../../../assets/share.png'

const Home = () => {

    return (

        <SafeAreaView style={{ felix: 1 }}>
            <ScrollView>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={home} style={styles.BorderClass} />

                </View>


                <View >
                    <TouchableOpacity>
                        <Image source={articles} style={styles.BorderButton1} />

                    </TouchableOpacity>

//
                //                
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
                    <TouchableOpacity>

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
        color: 'green',
        marginTop: 160

    },
    BorderClass:
    {

        width: 360,
        height: 300,
        borderWidth: 4,
        borderColor: 'black',
    },

    BorderButton1:
    {

        width: 170,
        height: 150,
        marginTop: 50,
        marginLeft: 10,
        borderWidth: 4,
        borderColor: 'black',
        borderRadius: 12,
        justifyContent: 'center'
    },


    BorderButton3:
    {

        width: 170,
        height: 150,
        marginTop: -170,
        marginLeft: 185,
        borderWidth: 4,
        borderColor: 'black',
        borderRadius: 12,

    },

    BorderButton2:
    {

        width: 170,
        height: 150,
        marginTop: 25,
        marginLeft: 10,
        borderWidth: 4,
        borderColor: 'black',
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
        borderColor: 'black',
        borderRadius: 12,

    },

})

export default Home;