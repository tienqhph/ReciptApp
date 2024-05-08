import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import SearchComponent from '../../../Components/SearchComponent';
import {NAME_SCREENS, color, image} from '../../../constants/constants';
import {styleHome} from '../StyleHome';
import {useGetMealByNameQuery} from '../../../Api/FoodApi';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../../Navigation/TypeCheck';

export default function SearchHomeComponent() {
  const [textSearch, setTextsearch] = useState('');
 

  

  const navigation = useNavigation<propsStack>()

  var timeOutId: NodeJS.Timeout;
  const searchFun = (text: string) => {


    if (timeOutId) {
      clearTimeout(timeOutId);
    }

    timeOutId = setTimeout(() => navigation.navigate(NAME_SCREENS.SEARCH , {DataSearch:text}), 3000);

  };
  return (
    <View style={{padding: 10}}>
      <SearchComponent _onSearch={(data: string) => searchFun(data)} />

      <View style={styleHome.styleRecipSearch}>
        <Image source={image.imageRecipts} style={styleHome.image} />
        <View style={{flex: 1}}>
          <Text style={styleHome.txttitleRecipes}>
            You have 12 recipes that you have't tried yet
          </Text>
          <TouchableOpacity>
            <Text style={styleHome.btnseeRecipes}>See Recipes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
