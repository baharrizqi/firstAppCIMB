import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'

const styles = StyleSheet.create({
    textLogin:{
        fontSize:24,
    }
})

const LoginScreen = (props) => {
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <TouchableOpacity onPress={()=> props.navigation.navigate('Register')}>
                <Text>To Register</Text>
            </TouchableOpacity>
            <Text style={{...styles.textLogin}}>Login Screen</Text>
        </View>
    )
}

export default LoginScreen