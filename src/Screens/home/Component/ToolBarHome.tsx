import { View, Text, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { styleHome } from '../StyleHome'

export default function ToolBarHome() {
  return (
    <SafeAreaView style = {styleHome.Containertoolbar}>
      <View style = {styleHome.styleViewTextToolbar} >
        <Text style = {styleHome.txttilte}>Hello ByProgrammer</Text>
        <Text style={styleHome.txtbold}>What yoy want to cook today!</Text>
      </View>
      <Image source={require('./../../../images_recripeapp/anh_dai_dien.jpg')} style ={styleHome.imageavt} />
    </SafeAreaView>
  )
}