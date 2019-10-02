import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
//import Component1 from './components/Component1';

function HomeScreen(props){

  return(
    <View>
      <Text style={{ flex: 1, alignItems: 'center' }}>
        Home
      </Text>
      <Button
        style={styles.button}
        title= 'Login'
        onPress={() => props.navigation.navigate('Login',{
            user: 'Suvodip'
          })
        }
      />
    </View>
  );
}

function ProfileScreen(props){
  return(
    <Button
      title='Profile'
      onPress={()=>props.navigation.navigate('Profile')}
    />
  );
}

function SettingScreen(props){
  return(
    <Button
      title='Setting'
      onPress={()=>props.navigation.navigate('Setting')}
    />
  );
}

function ProfileScreen(props){
  return(
    <Text>
      Profile
    </Text>
  );
}

const tabNavigator = createBottomTabNavigator({
    Profile: ProfileScreen,
    Setting: SettingScreen,
  },
  {
    initialRouteName: Profile
  }
);

const TabContainer = craeteAppContainer(tabNavigator);

function LoginScreen(props){
  return (
    <View>
      <Button
        style={styles.button}
        title='Back'
        onPress={() => props.navigation.goBack() }
      />
      <Text>
        user: { JSON.stringify(props.navigation.getParam('user')) }
        Logged In  
      </Text>
      <TabContainer />
    </View>
  );
}

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Login: LoginScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator)

export default function App() {
  return (
    <View>
      <AppContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    width: 100
  }
});