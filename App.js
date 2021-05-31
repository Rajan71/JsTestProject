import React, { useState, } from 'react';

import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  FlatList,
  SafeAreaView

} from 'react-native';
import Header from './src/Components/Header'
import AddToDo from './src/Components/AddToDo'

const windowWidth = Dimensions.get('window').width

const App = () => {
  const [todo, setTodo] = useState([
    { text: 'Buy a Burger', id: '1' },
    { text: 'Go to restaurant', id: '2' },
    { text: 'In Delhi', id: '3' },

  ])


  const renderItem = ({ item }) => {

    return <TouchableOpacity>
      <View style={styles.randerViewStyle}>
        <Text style={{ color: 'red', fontSize: 20 }}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  }


  const addHandler = (text) => {

    setTodo((prevTodos) => {
      return (
        [
          { text: text, id: Math.random().toString() },
          ...prevTodos
        ]
      )
    })
  }

  return (
    <View style={styles.mainView}>
      <Header />
      <View style={styles.inputViewStyle}>
        <AddToDo addHandler={addHandler} />
      </View>

      <View style={styles.listViewStyle}>

        <FlatList
          data={todo}
          renderItem={renderItem}
          keyExtractor={item => item.id}

        />
      </View>

    </View>
  )

}
const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    flex: 1
  },
  inputViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  randerViewStyle: {
    width: windowWidth * 0.85,
    borderWidth: 1,
    borderStyle: 'dashed',
    backgroundColor: '#fff',
    height: windowWidth * 0.12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    borderRadius: 25
  },
  listViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30, flex: 1
  }
})

export default App