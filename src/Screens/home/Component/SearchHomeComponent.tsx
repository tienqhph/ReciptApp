import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import SearchComponent from '../../../Components/SearchComponent'
import { color, image } from '../../../constants/constants'
import { styleHome } from '../StyleHome'

export default function SearchHomeComponent() {
  return (
    <View style = {{  padding:10}}>      
        <SearchComponent/>

        <View style = {styleHome.styleRecipSearch}>
            <Image source={image.imageRecipts} style = {styleHome.image}/>
            <View style = {{ flex:1}}>
                <Text style = {styleHome.txttitleRecipes}>You have 12 recipes  that you have't tried yet</Text>
                <TouchableOpacity>
                    <Text style = {styleHome.btnseeRecipes}>See Recipes</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}