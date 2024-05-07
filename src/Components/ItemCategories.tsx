import { View, Text, Image } from 'react-native'
import React from 'react'
import { color, image } from '../constants/constants'
import { style } from '../Screens/SplashScreens/styleSplash'
import { styleButton } from './StyleButton'
import { useGetCategoriesQuery } from '../Api/FoodApi'
type Props  = {
    img :string , 
    title:string , 
    desciption:string
}
export default function ItemCategories( {img , title , desciption}:Props) {


   
  return (
   
      <View style = {styleButton.conTainerCat}>
        <Image source={{uri:img}} style = {styleButton.imgCat}  resizeMode='contain'/>

        <View style = {styleButton.titleCat}> 
            <Text style = {styleButton.txtTitleCat}>{title} </Text>
            <Text style = {{fontWeight:'700' , color:color.black , fontSize:12}} numberOfLines={2}>{desciption}</Text>
        </View>
      </View>

  )
}