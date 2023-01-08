
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from "./src/redux/store";
import { Provider } from 'react-redux'
import Login from "./src/pages/login";
import Notification from "./src/pages/fireBase";
import DashBoard from "./src/pages/intro";
import ApiCall from "./src/pages/apiCall";

const Stack = createNativeStackNavigator();

const App = () => {

  return (

    <Provider store={store}>
      <NavigationContainer initialroutename={Login} >
        <Stack.Navigator screenOptions={{ headerShown: false }} >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="DashBoard" component={DashBoard} />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="ApiCall" component={ApiCall} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  )
}

export default App;
