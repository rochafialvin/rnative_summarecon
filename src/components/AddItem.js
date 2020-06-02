import React, { useState } from 'react'
import { 
   View, 
   Text,
   Alert, 
   StyleSheet, 
   TextInput, 
   TouchableOpacity } from 'react-native'

const AddItem = ({navigation}) => {

   const [title, setTitle] = useState('')
   const [year, setYear] = useState('')

   const changeTitle = text => setTitle(text)
   const changeYear = text => setYear(text)

   const addData = () => navigation.navigate('Details')

   return (
      <View>
         <TextInput placeholder="Title" onChangeText={changeTitle} />
         <TextInput placeholder="Year" onChangeText={changeYear} />
         <TouchableOpacity style={styles.btn} onPress={addData} >
            <Text style={styles.btnText} >New Routine</Text>
         </TouchableOpacity>
      </View>
   )
}

const styles = StyleSheet.create({
   btn: {
      backgroundColor: '#fabbbb',
      padding: 9,
      margin: 5
   },
   btnText : {
      color: '#E50914',
      fontSize : 20,
      textAlign: 'center'
   }
})

export default AddItem
