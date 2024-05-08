import { View, Text } from 'react-native'
import React from 'react'
import HeaderCompone from './Component/HeaderComponent'
import BodyComponent from './Component/BodyComponent'
import { useNavigation, useRoute } from '@react-navigation/native'
import { PropsRoute, propsStack } from '../../Navigation/TypeCheck'
import { useGetDetailMealQuery, useGetTrendingFoodQuery } from '../../Api/FoodApi'
import { NAME_SCREENS } from '../../constants/constants'
import Toast from 'react-native-toast-message'

export default function Detail() {


  const route = useRoute<PropsRoute>()

  const id = route.params.id


  const {data , error , isLoading} = useGetDetailMealQuery(id)






  
  const meals = data?.meals[0]



  
  return (
    <View  style = {{flex:1}}>
      <HeaderCompone url={meals?.strMealThumb??"https://thietbiquayphim.com/wp-content/uploads/2022/05/meo-chup-anh-do-an-toi-dep.png"} stkThumb={meals?.strMeal} id={meals?.idMeal}/>
      <BodyComponent meals={meals}/>

      <Toast/>
    </View>
  )
}