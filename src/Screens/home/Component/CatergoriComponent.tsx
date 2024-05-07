import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styleHome} from '../StyleHome';
import {FlatList} from 'react-native-gesture-handler';
import ItemCategories from '../../../Components/ItemCategories';
import {useGetCategoriesQuery} from '../../../Api/FoodApi';

export default function CatergoriComponent() {
  const {data, error, isLoading} = useGetCategoriesQuery();
  return (
    <View style={{padding: 10}}>
      <View
        style={styleHome.containerCat}>
        <Text style={styleHome.TrandingTitle}>Categories</Text>
        <TouchableOpacity>
          <Text style = {{fontSize:12}}>View All</Text>
        </TouchableOpacity>
      </View>

      {data?.categories.map((data, index) => (
        <ItemCategories
          img={data.strCategoryThumb}
          desciption={data.strCategoryDescription}
          title={data.strCategory}
          key={index}
        />
      ))}
    </View>
  );
}
