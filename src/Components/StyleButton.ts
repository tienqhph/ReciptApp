import {StyleSheet} from 'react-native';
import {color, size} from '../constants/constants';

export const styleButton = StyleSheet.create({
  btn: {
    backgroundColor: color.primaryColor,
    padding: size.padingMesium,
    borderRadius: 8,
  },

  textWhite: {
    color: color.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  btnoutline: {
    borderColor: color.primaryColor,
    padding: size.padingMesium,
    borderRadius: 8,
    borderWidth: 1,
  },
  iconSelected: {
    tintColor: color.primaryColor,
  },
  iconunSelected: {
    tintColor: 'gray',
  },
  containerIcon: {alignItems: 'center', justifyContent: 'center', padding: 10},
  BottomIconSelected: {
    width: '70%',
    height: 3,
    backgroundColor: color.primaryColor,
    position: 'absolute',
    bottom: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },

  containerSearch: {
    backgroundColor: color.graysearch,
    flexDirection: 'row',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  iconSearch: {width: 30, height: 30},

  containerItemTranding: {padding: 10, position: 'relative'},
  containerTag: {
    position: 'absolute',
    top: 20,
    left: 25,
    overflow: 'hidden',
    borderRadius: 10,
    padding: 10,
  },
  txttag: {color: 'white', fontSize: 14, fontWeight: 'bold'},
  containerTagbottom: {
    position: 'absolute',
    bottom: 0,

    borderRadius: 10,
    padding: 10,
  },

  containerBlurBookMark: {
    overflow: 'hidden',
    width: 200,
    height: 100,
    position: 'absolute',
    bottom: 20,
    left: 20,
    borderRadius: 20,
    backgroundColor: color.transparent,
  },

  viewTxtBlur: {
    width: 200,
    height: 100,
    padding: 10,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  txtBlur_1: {fontWeight: 'bold', fontSize: 14, color: color.white},
  txtblur_2: {paddingTop: 10, color: color.white, fontSize: 12},
  iconbookmark: {
    tintColor: color.primaryColor,
    width: 25,
    height: 25,
  },
  conTainerCat: {
    width:'100%' , height:100,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,  marginTop:15 ,

    backgroundColor: color.graysearch,
    borderRadius: 12,
  },
  imgCat: {width: 120, height: 120, borderRadius: 12},
  titleCat: {paddingLeft: 5, width: '70%'},
  txtTitleCat: {
    fontWeight: 'bold',
    color: color.black,
    fontSize: 18,
    paddingBottom: 20,
  },



  titleTXTDetail:{
    fontWeight:'bold' , 
    fontSize:16 , 
    color:color.black
  } , 
  pdtop20:{
    paddingTop:20
  } , 
  FlexRow:{
    flexDirection:'row'  , 
    justifyContent:'space-between' , 
    alignItems:'center'
  }
});
