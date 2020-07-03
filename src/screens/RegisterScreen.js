import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
    textRegister: {
        fontSize: 24,
    }
})

const RegisterScreen = (props) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity onPress={() => props.navigation.push('Login')}>
                <Text>To Login</Text>
            </TouchableOpacity>
            <Text style={{ ...styles.textRegister }}>Register Screen</Text>
        </View>
    )
}

export default RegisterScreen