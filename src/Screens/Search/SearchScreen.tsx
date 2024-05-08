import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { PropsRouteSearch } from '../../Navigation/TypeCheck'
import { useGetMealByNameQuery } from '../../Api/FoodApi';
import ItemCategories from '../../Components/ItemCategories';

export default function SearchScreen() {


  const {params} = useRoute<PropsRouteSearch>()

  const {data, error, isLoading} = useGetMealByNameQuery(params.DataSearch);
  return (
    <View>
      <ScrollView>
       
      {data?.meals.map((data, index) => (
        <ItemCategories
          img={data.strMealThumb}
          desciption={data.strInstructions}
          title={data.strCategory}
          key={index}
        />
      ))}
      </ScrollView>
    </View>
  )
}