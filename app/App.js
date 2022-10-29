import { StyleSheet, Text, View } from 'react-native';
import AddPost from './src/screens/Post_Mgmt/AddPost';
import PostDelete from './src/screens/Post_Mgmt/PostDelete';
import PostView from './src/screens/Post_Mgmt/PostView';
import UpdatePost from './src/screens/Post_Mgmt/UpdatePost';
import ChangePassword from './src/screens/User_Mgmt/ChangePassword';
import ForgetPassword from './src/screens/User_Mgmt/ForgetPassword';
import Home from './src/screens/User_Mgmt/Home';
import Login from './src/screens/User_Mgmt/Login';
import SignIn from './src/screens/User_Mgmt/Signin';
import ProfileUpdate from './src/screens/User_Mgmt/UpdateProfile';
import Profile from './src/screens/User_Mgmt/UserProfile';
import AddVideos from './src/screens/Video_Upload_Mgmt/AddVideoDetails';
import ManageVideos from './src/screens/Video_Upload_Mgmt/ManageVideos';
import CourseStep from './src/screens/Course_Mgmt/CourseStep';
import AvailableCourses from './src/screens/Course_Mgmt/AvailableCourses';
import DeleteCourses from './src/screens/Course_Mgmt/DeleteCourses';
import CourseIntro from './src/screens/Course_Mgmt/CourseIntro';
import Feedback from './src/screens/Course_Mgmt/Feedback';
import FeedbackView from './src/screens/Course_Mgmt/FeedbackView';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Screen from 'react-native-screens';

const Stack = createNativeStackNavigator();

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

      <Profile />
    </View>,
    <View>
      <AddPost />
    </View>,
    <View>
      <PostView />
    </View>,
    <View>
      <UpdatePost />
    </View>,
    <View>
      <AddVideos />
    </View>,
    <View>
      <PostDelete />
    </View>,

    <View>
      <PostDelete />
    </View>,

    <View>
      <AvailableCourses/>
    </View>,
    <View>
      <DeleteCourses/>
    </View>,
    <View>
      <CourseIntro />
    </View>,
    <View>
      <Feedback />
    </View>,
    <View>
      <FeedbackView />
    </View>,
      <View>
        <AddPost />
      </View>,

    <View>
      <PostView />
    </View>,
    <View>
      <AddVideos />
    </View>,
    <View>
      <ManageVideos />
    </View>

    // <NavigationContainer>

    //   <Stack.Navigator initialRouteName='AvailableCourses'>
    //     <Stack.Screen name='AvailableCourses' component={AvailableCourses} />
    //     <Stack.Screen name='CourseStep' component={CourseStep} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    // <View>
    //   <CourseStep/>
    // </View>

  );
}