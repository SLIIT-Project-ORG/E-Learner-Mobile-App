import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChangePassword from './src/screens/User_Mgmt/ChangePassword';
import ForgetPassword from './src/screens/User_Mgmt/ForgetPassword';
import Home from './src/screens/User_Mgmt/Home';
import Login from './src/screens/User_Mgmt/Login';
import SignIn from './src/screens/User_Mgmt/Signin';
import ProfileUpdate from './src/screens/User_Mgmt/UpdateProfile';
import Profile from './src/screens/User_Mgmt/UserProfile';



export default function App() {
  return (
    <View>
      <Home />
    </View>,
    <View>
      <Login />
    </View>,
    <View>
      <SignIn />
    </View>,
    <View>
      <ForgetPassword />
    </View>,
    <View>
      <ChangePassword />
    </View>,
    <View>
      <ProfileUpdate/>
    </View>,
    <View>
      <Profile/>
    </View>
  );
}