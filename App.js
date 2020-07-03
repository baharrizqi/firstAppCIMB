/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  FlatList
} from 'react-native';
import H1 from './src/components/Text/H1';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AuthStack from './src/navigators/AuthStack';

const StylingDasar = () => {
  return (
    <>
      {/* <View style={{
       flexDirection:"row",
       justifyContent:"center",
       alignItems:"center",
       backgroundColor:"pink",
       flex:1,
     }}>
       <Text>Hello World!</Text>
     </View> */}
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{
          backgroundColor: "pink",
          flex: 1,
        }} />
        <View style={{
          // backgroundColor: "lightblue",
          flex: 1,
          flexDirection: "row"
        }}>
          <View style={{ flex: 1, backgroundColor: "lightblue" }} />
          <View style={{ flex: 1, backgroundColor: "navy" }} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "red",
    padding: 12,
    width: "80%",
    marginTop: 12,
  },
  bgRed: {
    backgroundColor: "lightblue"
  },
  todoItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  deleteBtn: {
    backgroundColor: "red",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginLeft: 12,
  },
  addTodoBtn: {
    backgroundColor: "lightgray",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: 8,
    alignSelf: "center"
  }
})

const Todo = () => {
  //    nama state, nama fnc utk setstate
  const [inputText, setInputText] = useState('')
  const [todoList, setTodoList] = useState([])

  const addTodoHandler = () => {
    // console.log("TAP TODO")
    setTodoList([...todoList, inputText])
  }
  const inputHandler = (text) => {
    // console.log("INPUT HANDLER",text)
    setInputText(text)
  }
  const deleteTodoHandler = (deleteIdx) => {
    const newArr = todoList.filter((val, idx) => {
      return idx !== deleteIdx
    })
    setTodoList(newArr)
  }
  const renderTodoList = ({ item, index }) => {
    return (
      <View style={{ ...styles.todoItemContainer }}>
        <Text>{item}</Text>
        <TouchableOpacity
          style={styles.deleteBtn}
          onPress={() => deleteTodoHandler(index)}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>

    )
  }
  return (
    <View>
      {/* <StylingDasar /> */}
      <SafeAreaView />
      <H1 style={{ color: "red" }}>Halo Dunia</H1>
      {/* <Text>{inputText}</Text> */}
      <TextInput
        onChangeText={inputHandler}
        // style={[styles.textInput,styles.bgRed]}
        style={{ ...styles.textInput, ...styles.bgRed }}
        placeholder="Your Todo here" />
      <TouchableOpacity style={{ ...styles.addTodoBtn }} onPress={addTodoHandler}>
        <Text>ADD TODO</Text>
      </TouchableOpacity>
      {/* <ScrollView>
              {
                todoList.map((val, idx) => {
                  return <Text key={idx.toString()}>{val}</Text>
                })
              }
            </ScrollView> */}
      <FlatList
        keyExtractor={(itemy, idx) => idx.toString()}
        data={todoList}
        renderItem={renderTodoList} />
    </View>
  )
}


const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="AuthStack" component={AuthStack} />
        <Tab.Screen name="Todo" component={Todo} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}


export default App;
