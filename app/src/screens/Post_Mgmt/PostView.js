import React from "react";
import { SafeAreaView, ScrollView ,Text,View,StyleSheet, TouchableOpacity} from "react-native";



const PostView = ()=> {
  return (
    <SafeAreaView>
        <ScrollView>
         
         <View>
            <Text style={Styles.title}>POST VIEW</Text>
            </View>

          <View style={Styles.defaultButton1}>
          <TouchableOpacity style={{fontSize:20, color:'black',textAlign:'center'}}>ADD NEW</TouchableOpacity>
          </View>
            <View style={Styles.box}> </View>

            <View style={Styles.box}> </View>
            <View style={Styles.box}> </View>
           
            
        </ScrollView>
    </SafeAreaView>
  )
}

const Styles = StyleSheet.create({

    title:{

        fontSize:40,
        textAlign:'center',
       fontWeight:'bold',
        backgroundColor:'#1fbf3f',
        marginLeft:10,
        marginRight:10,
        marginTop:10,
        padding:10,
       
        
        
},
box:{

     backgroundColor:'lightgray',
     height:150,
     width:340,
     borderColor:'black',
     marginTop:10,
     marginLeft:10,
     marginRight:50,
     borderRadius:10,
     borderWidth: 2,
     

},
defaultButton1:{
    
  backgroundColor:'#a1f0b0',
  marginTop:20,
  marginLeft:120,
  marginRight:20,
  padding:15,
  borderRadius:15,
  fontWeight:'bold',
  marginBottom:30,
  


}
   
    
    



})
export default PostView