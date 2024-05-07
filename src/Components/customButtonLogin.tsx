import { View, Text, TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react'
import { styleButton } from './StyleButton'
import { useNavigation } from '@react-navigation/native'
import { propsStack } from '../Navigation/TypeCheck'
import { NAME_SCREENS } from '../constants/constants'

type props ={
    title :string , 
    style?:ViewStyle , 
    _OnpressLogin?:Function


}

export  const ButtonLogin = (props:props) =>{
  const  navigation =  useNavigation<propsStack>();
  const _ongotoHome = ()=>{

    console.log("váo đây 111dd1"  , navigation)
    
    navigation.push(NAME_SCREENS.BOTTOMTAB)
  }
   return(

    <TouchableOpacity style = {[styleButton.btn , props.style]} onPress={()=>_ongotoHome()}>
      <Text style = {styleButton.textWhite}>{props.title}</Text>
    </TouchableOpacity>
  )
}


  export  const OutLineButton = (props:props) =>
    (
 
  
     <TouchableOpacity style = {[styleButton.btnoutline , props.style]}>
       <Text style = {styleButton.textWhite}>{props.title}</Text>
     </TouchableOpacity>
   )
 