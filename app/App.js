import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AvailableCourses from './src/screens/Course_Mgmt/AvailableCourses';
import CourseMenu from './src/screens/Course_Mgmt/CourseMenu';
import ChangePassword from './src/screens/User_Mgmt/ChangePassword';
import ForgetPassword from './src/screens/User_Mgmt/ForgetPassword';
import Home from './src/screens/User_Mgmt/Home';
import Login from './src/screens/User_Mgmt/Login';
import SignIn from './src/screens/User_Mgmt/Signin';
import ProfileUpdate from './src/screens/User_Mgmt/UpdateProfile';
import Profile from './src/screens/User_Mgmt/UserProfile';
import AddVideos from './src/screens/Video_Upload_Mgmt/AddVideoDetails';


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
      <ProfileUpdate />
    </View>,
    <View>
      <Profile />
    </View>,
    <View>
      <AddVideos />
    </View>
  );
}