import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/Store';
import {getDatafromStorage} from '../../redux/GetdataToStorage';
import {KEYBOOKMARK} from '../../constants/constants';
import ItemCategories from '../../Components/ItemCategories';

export default function BookmarkScreen() {
  const dispatch: AppDispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const data = useSelector((state: RootState) => state.mealSlice.meals);


  
  const onRefresh = () => {
    setRefreshing(true);

   
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  useEffect(()=>{
    dispatch(getDatafromStorage(KEYBOOKMARK.KEY));
  } , [data])

  return (
    <View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
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
