import React from 'react'
import { View, Text, Button, Alert } from 'react-native'

import AddItem from './AddItem'

// object navigation memiliki method navigate untuk pindah ke screen lain
const Home = ({ navigation }) => {
   return (
      <View>
         {/* karena addItem tidak terdaftar pada Stack Navigator */}
         {/* maka dari itu menerima object navigation dari Home yang terdaftar ke Stack Navigator */}
         {/* untuk kemudian digunakan untuk berpindah ke screen detail dari AddItem */}
         <AddItem navigation={navigation}/>
      </View>
   )
}

export default Home
