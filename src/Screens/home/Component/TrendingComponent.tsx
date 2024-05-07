import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {BlurView} from '@react-native-community/blur';
import ItemTrandingRecipe from '../../../Components/ItemTrandingRecipe';
import {styleHome} from '../StyleHome';
import {useGetTrendingFoodQuery} from '../../../Api/FoodApi';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../../../redux/Store';
import { propsStack } from '../../../Navigation/TypeCheck';
import { NAME_SCREENS } from '../../../constants/constants';

export default function TrendingComponent() {
  const {data, error, isLoading} = useGetTrendingFoodQuery();

  const navigation =useNavigation<propsStack>()
const onGotoDetail = (id:string)=>{

    console.log("í" , id);
  
    navigation.push(NAME_SCREENS.DETAIL , {id})
  
}
  return (
    <View style={styleHome.conteinerTranding}>
      <Text style={styleHome.TrandingTitle}> Trending Recipe</Text>
      <FlatList
      showsHorizontalScrollIndicator = {false}
        horizontal
        data={data?.meals ?? []}
        renderItem={({item}) => (
          <ItemTrandingRecipe
          idProduct={item.idMeal}
          onPress={onGotoDetail}
            url={item.strMealThumb}
            categori={item.strCategory}
            title={item.strMeal} 
            tag={item.strArea}
          />
        )}
      />
    </View>
  );
}
