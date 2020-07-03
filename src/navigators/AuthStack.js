import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import RegisterScreen from '../screens/RegisterScreen'
import LoginScreen from '../screens/LoginScreen'
import { SafeAreaView, View,Text } from 'react-native'

const Stack = createStackNavigator()

const CustomHeader = () => {
    return(
        <SafeAreaView>
            <View style={{backgroundColor:"lightblue",height:48}}>
                <Text>Title Here</Text>
            </View>
        </SafeAreaView>
    )
}

const AuthStack = () => {
    return (
        <Stack.Navigator 
        screenOptions={{
            headerTitleStyle: {
            color:"red",
            fontSize:24,
            },
            headerTitleContainerStyle:{
                backgroundColor:"lightblue",
                padding:8,
                borderRadius:8,
            },
            header: CustomHeader,
        }}>
            <Stack.Screen name ="Login" component={LoginScreen}/>
            <Stack.Screen name ="Register" component={RegisterScreen}/>
        </Stack.Navigator>
    )
}

export default AuthStack