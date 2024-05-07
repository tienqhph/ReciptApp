import {View, Text} from 'react-native';
import React from 'react';
import {styleButton} from './StyleButton';
import { useRoute } from '@react-navigation/native';
import { PropsRoute } from '../Navigation/TypeCheck';
import { useGetDetailMealQuery } from '../Api/FoodApi';

export default function ItemIngredient() {
  const route = useRoute<PropsRoute>()

  const id = route.params.id


  const {data , error , isLoading} = useGetDetailMealQuery(id)


  const meals = data?.meals[0]






  console.log("data detail page " , data?.meals);
  return (
    <View style={styleButton.pdtop20}>
      <View>
        <Text style={styleButton.titleTXTDetail}>Intruction</Text>

        <Text>{meals?.strInstructions}</Text>
      </View>
      <View style={styleButton.pdtop20}>
        <Text style={styleButton.titleTXTDetail}>Ingredients</Text>
  
        <View style={styleButton.FlexRow}>
          <Text>{meals?.strIngredient1}</Text>
          <Text>{meals?.strMeasure1}</Text>


        </View>
        <View style={styleButton.FlexRow}>
          <Text>{meals?.strIngredient2}</Text>
          <Text>{meals?.strMeasure2}</Text>


        </View>
        <View style={styleButton.FlexRow}>
          <Text>{meals?.strIngredient3}</Text>
          <Text>{meals?.strMeasure3}</Text>


        </View>
        <View style={styleButton.FlexRow}>
          <Text>{meals?.strIngredient14}</Text>
          <Text>{meals?.strMeasure4}</Text>


        </View>
        <View style={styleButton.FlexRow}>
          <Text>{meals?.strIngredient5}</Text>
          <Text>{meals?.strMeasure5}</Text>


        </View>

      </View>
    </View>
  );
}
