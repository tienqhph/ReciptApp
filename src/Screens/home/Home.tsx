import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import ToolBarHome from './Component/ToolBarHome';
import SearchHomeComponent from './Component/SearchHomeComponent';
import {styleHome} from './StyleHome';
import TrendingComponent from './Component/TrendingComponent';
import CatergoriComponent from './Component/CatergoriComponent';

export default function Home() {
  return (
    <View style={styleHome.container}>
      <ToolBarHome />
      <ScrollView>
        <SearchHomeComponent />
        <TrendingComponent />

        <CatergoriComponent/>
      </ScrollView>
    </View>
  );
}
