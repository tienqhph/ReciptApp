import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'
import { icon } from '../constants/constants'
import { styleButton } from './StyleButton'

 type SearchType = {
    _onSearch:Function , 
}

export default function SearchComponent({_onSearch}:SearchType) {
  
  return (
    <View style = {styleButton.containerSearch}>
      <Image source={icon.iconsearch} style = {styleButton.iconSearch}/>
      <TextInput placeholder='Search' style = {{ flex:1}}  onChangeText={(text)=>_onSearch(text)} />
    </View>
  )
}