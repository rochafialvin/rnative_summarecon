import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Details = ({route}) => {
   
   const {title, year} = route.params.film

   return (
      <View style={styles.view} >
         <Text>Details List</Text>
         <Text>{title}</Text>
         <Text>{year}</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   view : {
      flex:1, 
      alignItems: 'center', 
      justifyContent: 'center'
   }
})


export default Details
