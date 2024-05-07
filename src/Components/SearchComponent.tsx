import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'
import { icon } from '../constants/constants'
import { styleButton } from './StyleButton'

export default function SearchComponent() {
  return (
    <View style = {styleButton.containerSearch}>
      <Image source={icon.iconsearch} style = {styleButton.iconSearch}/>
      <TextInput placeholder='Search' style = {{ flex:1}}/>
    </View>
  )
}