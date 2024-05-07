import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {image} from '../../../constants/constants';
import {styleDetail} from '../StyleDetail';
import ItemIngredient from '../../../Components/ItemIngredient';
import RenderListImageDetailPage from '../../../Components/RenderListImageDetailPage';
import { useRoute } from '@react-navigation/native';
import { PropsRoute } from '../../../Navigation/TypeCheck';
import { useGetDetailMealQuery } from '../../../Api/FoodApi';
import { Meal } from '../../../Api/Tyoe';


type Props = {
    meals?:Meal
}
export default function BodyComponent({meals}:Props) {
    
  return (
    <ScrollView contentContainerStyle={styleDetail.pd10} showsVerticalScrollIndicator={false}>
      <View style={styleDetail.viewHeaderTtile}>
        <View style={styleDetail.width50}>
          <Text style={styleDetail.Title}>{meals?.strMeal}</Text>

          <Text>{meals?.strCategory} | {meals?.strArea} </Text>
        </View>

        <View style={styleDetail.aliFlex_End}>

            <RenderListImageDetailPage/>
          <Text style={styleDetail.pdt_pdbtom}> 4 people</Text>
          <Text>Already try this!</Text>
        </View>
      </View>

      <View>
        <ItemIngredient />
      </View>
    </ScrollView>
  );
}
