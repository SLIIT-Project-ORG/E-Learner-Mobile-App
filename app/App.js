import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ForgetPassword from './src/screens/User_Mgmt/ForgetPassword';
import Home from './src/screens/User_Mgmt/Home';
import Login from './src/screens/User_Mgmt/Login';
import SignIn from './src/screens/User_Mgmt/Signin';



export default function App() {
  return (
    <View>
         <Home/>
    </View>,
    <View>
        <Login/>
    </View>,
    <View>
        <SignIn/>
    </View>,
    <View>
    <ForgetPassword/>
</View>
  );
}