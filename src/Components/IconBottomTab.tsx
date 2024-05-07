import {View, Text, Image} from 'react-native';
import React from 'react';
import {color, icon} from '../constants/constants';
import { styleButton } from './StyleButton';
type iconType = {
  focused: boolean;
  icon: any;
};
export default function IconBottomTab({focused, icon}: iconType) {
  return (
    <View style={styleButton.containerIcon}>
      <Image source={icon} style={focused?styleButton.iconSelected: styleButton.iconunSelected} />
      {focused && (
        <View
          style={styleButton.BottomIconSelected}
        />
      )}
    </View>
  );
}
