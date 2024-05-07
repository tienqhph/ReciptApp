import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/Store';
import {getDatafromStorage} from '../../redux/GetdataToStorage';
import {KEYBOOKMARK} from '../../constants/constants';
import ItemCategories from '../../Components/ItemCategories';

export default function BookmarkScreen() {
  const data = useSelector((state: RootState) => state.mealSlice.meals);
 

 
  return (
    <View>
 

      <ScrollView>
        {data.map((data, index) => (
          <ItemCategories
            img={data.url}
            desciption={data.id}
            title={data.stkThumb}
            key={index}
          />
        ))}
      </ScrollView>
    </View>
  );
}
