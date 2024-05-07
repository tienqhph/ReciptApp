import {StyleSheet} from 'react-native';
import {color, size} from '../../constants/constants';

export const styleHome = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    flex: 1,
  },
  Containertoolbar: {
    padding: 10,
    alignContent: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  styleViewTextToolbar: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  imageavt: {width: 50, height: 50, borderRadius: 12},

  txttilte: {
    fontWeight: 'bold',
    color: color.primaryColor,
    fontSize: 24,
  },
  txtbold: {
    fontSize: 14,
  },
  styleRecipSearch: {
    backgroundColor: color.primaryColorLight,
    flexDirection: 'row',
    marginTop: 20,
    borderRadius: 10,
    alignItems: 'center',
    padding: 20,
  },
  image:{width:100 , height:100} , 
  txttitleRecipes:{fontWeight:'bold' , color:color.black , padding:10} , 
  btnseeRecipes:{color:color.primaryColor  , fontWeight:'bold' , textDecorationLine:'underline'},
  conteinerTranding:{
    padding:10
  } , 
  TrandingTitle:{
    fontWeight:'bold' , 
    fontSize:24 , 
    color:color.black
  } , 
  containerCat:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', marginBottom:10,
  },
});
