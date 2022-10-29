import React from 'react'
import { SafeAreaView, ScrollView, View ,StyleSheet,Text,TextInput,Image,TouchableOpacity} from 'react-native'
import table from '../../../assets/table.png';
import AppBarComponent from '../Common/AppBarComponent';

const AddPost = () => {
 return(
    <SafeAreaView>
        <ScrollView>

               <AppBarComponent/>
                <View  style={styles.container}>
                <Text style ={styles.title}>ADD POST</Text>
                <View  style={styles.container}>
               <Image source={table} style={styles.BorderClass} />
                </View>

                <View>
            <TouchableOpacity style={styles.defaultButton2} >
                <Text style={{fontWeight:'bold' , fontSize:20, color:'black' ,textAlign:'center'}}> UPLOAD</Text>
            </TouchableOpacity>
            </View>
                </View>


                <View>
                <Text style={styles.label}>Topic</Text>
                <TextInput style={styles.inputfields} />
                </View>


                <View>
                <Text style={styles.label}>Category</Text>
                <TextInput style={styles.inputfields} />
            </View>


            <View>
                <Text style={styles.label}>Relevant Link</Text>
                <TextInput style={styles.inputfields} />
            </View>

            <View>
                <Text style={styles.label}>Description</Text>
                <textarea style={styles.inputfields} />
            </View>


            <View>
            <TouchableOpacity style={styles.defaultButton} >
                <Text style={{fontWeight:'bold' , fontSize:20, color:'black' ,textAlign:'center'}}> SUBMIT</Text>
            </TouchableOpacity>
            </View>

            <View>
            <TouchableOpacity style={styles.defaultButton1} >
                <Text style={{fontWeight:'bold' , fontSize:20, color:'black' ,textAlign:'center'}}> CANCEL</Text>
            </TouchableOpacity>
            </View>


                
        </ScrollView>
    </SafeAreaView>

)}
const styles = StyleSheet.create({

    title:{
     
        fontSize:40,
        textAlign:'center',
        color:'black',
        fontWeight:'bold',
        backgroundColor:'#1fbf3f',
        marginLeft:30,
        marginRight:30
       

    },
    container:{
        backgroundColor:'white',
        
       
    },
    label: {
        fontSize: 20,
        marginTop:10,
        marginLeft:-160,
        fontWeight: "bold",
        textAlign: "center",
        color: 'black'

    },

    inputfields:{
     
        borderColor:'a7a7',
        borderWidth:1,
        padding:8,
        fontSize:16,
        borderRadius:10,
        marginTop:8,
        marginLeft:30,
        marginRight:30,
        
    },
    BorderClass:
    {

        width: 140,
        height: 140,
        borderWidth: 1,
        borderColor: 'black',
        marginTop:10,
        marginLeft:10
    },
    defaultButton:{
      
        backgroundColor:'#1fbf3f',
        marginTop:10,
        marginLeft:50,
        marginRight:50,
        padding:15,
        borderRadius:15
 
 
     },
     defaultButton1:{
       
         backgroundColor:'#a1f0b0',
         marginTop:5,
         marginLeft:50,
         marginRight:50,
         padding:9,
         borderRadius:15
  
  
      },
      defaultButton2:{

        backgroundColor:'#a1f0b0',
        marginLeft:180,
        marginRight:10,
        marginTop:-100,
        padding:9,
        borderRadius:15


      }
 



})
export default AddPost;
