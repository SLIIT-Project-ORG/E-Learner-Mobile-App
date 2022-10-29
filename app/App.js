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
      <PostDelete/>
    </View>,

   <View>
      <PostDelete />
    </View>,


    <View>
      <CourseStep />
    </View>,
    <View>
      <Acourses />
    </View>,
    <View>
      <Dcourses />
    </View>,
    <View>
      <Icourses />
    </View>,
    <View>
      <Feedback />
    </View>,
    <View>
      <FView />
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


  );
}