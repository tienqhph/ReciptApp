import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {color, icon, image} from '../constants/constants';
import {BlurView} from '@react-native-community/blur';
import {styleButton} from './StyleButton';

type itemTrending = {
  idProduct:string,
  url: string;
  categori: string;
  title: string;
  tag: string;
   onPress ?:Function 
};
export default function ItemTrendingRecipe(props: itemTrending) {
  return (
    <TouchableOpacity onPress={ ()=>{
      if(props.onPress!=undefined){
        props.onPress(props.idProduct)
      }
    }}>
      <View style={styleButton.containerItemTranding}>
        <Image
          source={{uri: props.url??''}}
          style={{width: 220, height: 300, borderRadius: 20}}
          resizeMode="repeat"
        />

        <View style={styleButton.containerTag}>
          <BlurView>
            <Text style={styleButton.txttag}>{props.categori}</Text>
          </BlurView>
        </View>

        <View style={styleButton.containerBlurBookMark}>
          <BlurView>
            <View style={styleButton.viewTxtBlur}>
              <View style={{flex: 1}}>
                <Text style={styleButton.txtBlur_1} numberOfLines={2}>
                  {props.title}
                </Text>
                <Text style={styleButton.txtblur_2}>{props.tag}</Text>
              </View>

              <Image
                source={icon.iconbookmark}
                style={styleButton.iconbookmark}
              />
            </View>
          </BlurView>
        </View>
      </View>
    </TouchableOpacity>
  );
}
