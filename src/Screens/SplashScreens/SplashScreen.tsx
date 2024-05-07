import { View, Text, Image } from 'react-native'
import React from 'react'
import { NAME_SCREENS, TEXT, color, image } from '../../constants/constants'
import { style } from './styleSplash'
import LinearGradient from 'react-native-linear-gradient';
import { ButtonLogin, OutLineButton } from '../../Components/customButtonLogin';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../Navigation/TypeCheck';

export default function SplashScreen() {
  const  navigation =  useNavigation<propsStack>();

  return (
    <View style = {style.container}>
      <Image source={image.SplashBackground}  style = {style.imagebgSplash} />
      <LinearGradient colors={[ color.transparent , color.black ]} style = {style.absolute}>
        <View style = {[style.absolute , style.bottomviewSplash]}>
          <Text style ={style.title}>Cooking a Delicious Food Easily</Text>
          <Text style ={style.subtitle}>Discover more than 1200 food recips in your hands and coking it easily!</Text>
          <ButtonLogin style = {style.mrt32}title={TEXT.LOGIN} />
          <OutLineButton  style={style.mrt16}title={TEXT.SINGUP}/>
        </View>
      </LinearGradient>


    </View>
  )
}