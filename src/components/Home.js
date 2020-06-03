import React, {useState} from 'react'
import { View, Text, Button, Alert, FlatList, TouchableOpacity } from 'react-native'
import shortid from 'shortid'

import AddItem from './AddItem'
import ListItem from './ListItem'

// object navigation memiliki method navigate untuk pindah ke screen lain
const Home = ({ navigation }) => {

   const [films, setFilms] = useState([
      {id : 1, title: 'Stranger Things', year : 2016},
      {id : 2, title: 'Kingdom', year : 2019}
   ])

   const addNewRoutine = (title, year) => {
      // setiap film akan disimpan dalam bentuk object, maka setiap menambah film baru, berarti kita menambah object baru
      // dalam pembuatan id kita membutuhkan library untuk membuat string random yang akan bersifat unique
      const newFilm = {id : shortid.generate() , title, year}
      // setFilms harus me-return sebuah array. Caranya adalah array yang lama ditambah dengan object yang baru mengguanakan metode 'titik tiga'. hehe lupa istilahnya eug
      setFilms([...films, newFilm])
      
   }

   return (
      <View>
         <AddItem addNewRoutine={addNewRoutine} />
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