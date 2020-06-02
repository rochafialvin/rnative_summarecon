import React from 'react'
import { View, Text, Button, Alert } from 'react-native'

const Home = ({ navigation }) => {
   return (
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}} >
         <Text>Home Component</Text>
         <Button
            title="Pindah ke Detail"
            color="magenta"
            onPress={() => navigation.navigate('Details')}
         />
      </View>
   )
}

export default Home
