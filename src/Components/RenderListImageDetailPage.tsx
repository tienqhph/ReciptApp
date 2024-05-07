import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styleDetail} from '../Screens/Detail/StyleDetail';
import {image} from '../constants/constants';

export default function RenderListImageDetailPage() {
  const Listdata = {
    data: [
      {
        id: '0',
        source: image.SplashBackground,
      },
      {
        id: '1',
        source: image.imgavt,
      },
      {
        id: '2',
        source: image.imgavt,
      },
      {
        id: '3',
        source: image.imgavt,
      },
      {
        id: '4',
        source: image.imgavt,
      },
      {
        id: '5',
        source: image.imgavt,
      },
      {
        id: '6',
        source: image.imgavt,
      },
   
      
      
    ],
    limit: 5,
  };
  const [soluong, setsoluong] = useState(0);
  const RenderItem = () => {
    setsoluong(Listdata.data.length - Listdata.limit);
  };

  useEffect(() => {
RenderItem()
  }, [soluong]);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>+{soluong}</Text>

      {Listdata.data.map((data, index) => {
        if (index < Listdata.limit) {
          return (
            <Image key={index}
              source={data.source}
              style={index == 0 ? styleDetail.imgavt : styleDetail.imgavtmr}
            />
          );
        }
      })}
    </View>
  );
}
