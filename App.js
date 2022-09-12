import React from 'react';
import SignUp from './src/screens/Auth/SignUp';
import SignIn from './src/screens/Auth/SignIn';
import Movies from './src/screens/Movies/Movies';
import MovieDetail from './src/screens/Movies/MovieDetail';
import UpcomingDetail from './src/screens/Movies/UpcomingDetail';
import ForgotPassword from './src/screens/Auth/ForgotPassword';
import {Home} from './src/screens/Home/Home';
import SetPassword from './src/screens/Auth/SetPassword';
import {NavigationContainer, TabRouter} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persistor} from './src/redux/store';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ListMovie} from './src/screens/Movies/components/MovieList';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomNav from './src/screens/components/BottomNav';
import BuyTicket from './src/screens/Ticket/BuyTicket';
import CheckOut from './src/screens/Ticket/CheckOut';
import {Image} from 'react-native';
import MyTicket from './src/screens/Ticket/MyTicket';
import Header from './src/screens/components/Header';
import Profile from './src/screens/Profile/Profile';
import SplashScreen from './src/screens/SplashScreen.js/SplashScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarStyle: {
          backgroundColor: 'white',
          borderBottomColor: 'grey',
          borderWidth: 0.5,
        },
        tabBarLabelStyle: {
          color: '#5F2EEA',
          fontSize: 15,
          fontWeight: 'bold',
        },
        tabBarActiveBackgroundColor: '#F5F5F5',
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require('./assets/Logo/Home.png')}
              style={{width: 20, height: 20, marginBottom: '-3%'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require('./assets/Logo/Movies.png')}
              style={{width: 25, height: 20, marginBottom: '-3%'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyTicket"
        component={MyTicket}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require('./assets/Logo/Ticket.png')}
              style={{width: 25, height: 20, marginBottom: '-3%'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require('./assets/Logo/user.png')}
              style={{
                width: 25,
                height: 25,
                resizeMode: 'contain',
                marginBottom: '-5%',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="HomeTabs"
                component={HomeTabs}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{headerShown: false}}
              />

              <Stack.Screen
                name="SetPassword"
                component={SetPassword}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="MovieDetail"
                component={MovieDetail}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="UpcomingDetail"
                component={UpcomingDetail}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="MoviesTabs"
                component={HomeTabs}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="BuyTicket"
                component={BuyTicket}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="CheckOut"
                component={CheckOut}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="MyTicket"
                component={MyTicket}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Header"
                component={Header}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
