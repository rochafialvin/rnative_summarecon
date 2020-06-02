import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const App = () => {
   return (
      <View style={styles.view} >
         <Text style={styles.text} >App Component</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   view: {
      backgroundColor: 'red'
   },
   text : {
      color: 'white'
   }
})

export default App