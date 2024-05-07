import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {KEYBOOKMARK, color, icon, image} from '../../../constants/constants';
import {BlurView} from '@react-native-community/blur';
import {styleDetail} from '../StyleDetail';
import {useNavigation} from '@react-navigation/native';
import {propsStack} from '../../../Navigation/TypeCheck';
import {storage} from '../../../Storage/storage ';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import {BookmarkType} from '../../../Api/Tyoe';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/Store';
import { getDatafromStorage } from '../../../redux/GetdataToStorage';

type props = {
  url?: string;
  stkThumb?: string;
  id?: string;
};

export default function HeaderCompone({url, stkThumb, id}: props) {

  const dispatch: AppDispatch = useDispatch();

  const navigation = useNavigation<propsStack>();
  const onBackPress = () => {
    navigation.pop();
  };

  const _onPressBookMark = async () => {
    const data: BookmarkType = {
      url,
      id,
      stkThumb,
    };

    try {
      const getdata: BookmarkType[] = await storage.load({
        key: KEYBOOKMARK.KEY,
      });
        console.log('kieemr tra data' , getdata);
      const filterdata = getdata.filter(item => item.id == id);

  
    if(filterdata.length==0){
      const newArray = [...getdata, data];
      storage.save({key: KEYBOOKMARK.KEY, data: newArray});

      Toast.show({
        type:'success' , 
        text1: 'Thanh cong',
        text2: 'Them thanh cong 👋'
      })

      dispatch(getDatafromStorage(KEYBOOKMARK.KEY));
    }
  
      
    } catch (error) {
      storage.save({key: KEYBOOKMARK.KEY, data: [data]});

      dispatch(getDatafromStorage(KEYBOOKMARK.KEY));


    }
  };
  return (
    <View style={styleDetail.containerHeader}>
      <Image
        source={{uri: url}}
        resizeMode="cover"
        style={styleDetail.containerHeader}
      />

      <View style={styleDetail.viewToolbarHeader}>
        <TouchableOpacity onPress={() => onBackPress()}>
          <Image source={icon.iconNext} style={styleDetail.styleIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={_onPressBookMark}>
          <Image source={icon.iconbookmark} style={styleDetail.stylebookmark} />
        </TouchableOpacity>
      </View>

      <View style={styleDetail.containerBlurView}>
        <BlurView>
          <View style={styleDetail.ContainerTitleHeader}>
            <View style={{flexDirection: 'row', flex: 1}}>
              <Image source={image.imgavt} style={styleDetail.imgavt} />
              <View>
                <Text style={styleDetail.txtrecipt}>Recipt by:</Text>
                <Text style={styleDetail.txtName}>Hoàng Tiến </Text>
              </View>
            </View>

            <Image source={icon.iconBack} style={styleDetail.styleIcon} />
          </View>
        </BlurView>
      </View>
    </View>
  );
}
