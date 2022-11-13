import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import FView from './src/screens/Course_Mgmt/FeedbackView';
import AddPost from './src/screens/Post_Mgmt/AddPost';
import PostDelete from './src/screens/Post_Mgmt/PostDelete';
import PostView from './src/screens/Post_Mgmt/PostView';
import PostViewById from './src/screens/Post_Mgmt/PostViewById';
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
import UpdateVideoDetails from './src/screens/Video_Upload_Mgmt/UpdateVideoDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen from 'react-native-screens';

import AllVideos from './src/screens/Video_Upload_Mgmt/VideoView';
import AddComments from './src/screens/Video_Upload_Mgmt/AddComments';
import CommentManage from './src/screens/Video_Upload_Mgmt/CommentView';
import AddArticles from './src/screens/File_Upload_Mgmt/AddArticles';
import ArticleView from './src/screens/File_Upload_Mgmt/ArticleView';
import UpdateArticles from './src/screens/File_Upload_Mgmt/UpdateArticle';
import DeleteArticle from './src/screens/File_Upload_Mgmt/DeleteArticles';
import CourseMenu from './src/screens/Course_Mgmt/CourseMenu';
import AppBarComponent from './src/screens/Common/AppBarComponent';
import GetStarted from './src/screens/User_Mgmt/GetStartedPage';
import ViewArticle from './src/screens/User_Mgmt/ViewArticle';

const Stack = createStackNavigator();

export default function App() {
  return (


    <NavigationContainer>
      <Stack.Navigator initialRouteName="E-learner">
        <Stack.Screen
          name="ManageVideos"
          component={ManageVideos}
        />
        <Stack.Screen
          name="AddVideos"
          component={AddVideos}
        />
        <Stack.Screen
          name="UpdateVideoDetails"
          component={UpdateVideoDetails}
        />
        <Stack.Screen
          name="AllVideos"
          component={AllVideos}
        />
        <Stack.Screen
          name="AddComments"
          component={AddComments}
        />

        <Stack.Screen
          name="AvailableCourses"
          component={AvailableCourses}
        />
        <Stack.Screen
          name="CourseIntro"
          component={CourseIntro}
        />
        <Stack.Screen
          name="CourseMenu"
          component={CourseMenu}
        />
        <Stack.Screen
          name="CourseStep"
          component={CourseStep}
        />
        <Stack.Screen
          name="DeleteCourses"
          component={DeleteCourses}
        />
        <Stack.Screen
          name="Feedback"
          component={Feedback}
        />
        <Stack.Screen
          name="FeedbackView"
          component={FeedbackView}
        />
        <Stack.Screen
          name="Comments"
          component={CommentManage}
        />

        <Stack.Screen
          name="E-learner"
          component={GetStarted}
        />
        <Stack.Screen
          name="LOGIN PAGE"
          component={Login}
        />
        <Stack.Screen
          name="FORGET PASSWORD PAGE"
          component={ForgetPassword}
        />
        <Stack.Screen
          name="CHANGE PASSWORD PAGE"
          component={ChangePassword}
        />
        <Stack.Screen
          name="REGISTER PAGE"
          component={SignIn}
        />


        <Stack.Screen
          name="HOME PAGE"
          component={Home}
        />

        <Stack.Screen
          name="ADD POST PAGE"
          component={AddPost}
        />
        <Stack.Screen
          name="VIEW POST PAGE"
          component={PostView}
        />
        <Stack.Screen
          name="DELETE POST PAGE"
          component={PostDelete}
        />
        <Stack.Screen
          name="VIEW POST"
          component={PostViewById}
        />
        <Stack.Screen
          name="UPDATE POST"
          component={UpdatePost}
        />
        <Stack.Screen
          name="ArticleView"
          component={ArticleView}
        />
         <Stack.Screen
          name="AddArticles"
          component={AddArticles}
        />
        <Stack.Screen
          name="UpdateArticles"
          component={UpdateArticles}
        />

      </Stack.Navigator>
    </NavigationContainer>

  );
}