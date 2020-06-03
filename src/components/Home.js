import React, {useState} from 'react'
import { View, Text, Button, Alert, FlatList, TouchableOpacity } from 'react-native'

import AddItem from './AddItem'
import ListItem from './ListItem'

// object navigation memiliki method navigate untuk pindah ke screen lain
const Home = ({ navigation }) => {

   const [films, setItems] = useState([
      {id : 1, title: 'Stranger Things', year : 2016},
      {id : 2, title: 'Kingdom', year : 2019}
   ])


   return (
      <View>
         <AddItem />
         <FlatList
            // films = [ {id, title, year}, {}, {} ]
            data={films}
            // item = {id, title, year}
            renderItem={({item}) =>  <ListItem film={item} /> }
         />
      </View>
   )
}

export default Home

// jika pada react.js kita bisa memilih variable untuk function di dalam map
// const renderList = () => {
//    items.map(film => {return <li>{film.title}</li>})
// }

// pada react native, best practice kita akan selalu menggunakan {item}
// const renderListReactNative = () => {
//    items.map(
//       ({item})=> {return <li>{item.title}</li>}
//    )
// }