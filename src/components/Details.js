import React from 'react'
import { View, Text } from 'react-native'

const Details = () => {
   return (
      <View style={styles.view} >
         <Text>Details Components</Text>
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
