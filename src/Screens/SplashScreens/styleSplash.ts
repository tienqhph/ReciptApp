import {StyleSheet} from 'react-native';
import { FontSize, color, size } from '../../constants/constants';

export const style = StyleSheet.create({
  imagebgSplash: {
    width: '100%',
    height: '100%',
  },

  container: {
    flex: 1
  },
  absolute: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  bottomviewSplash: { height: '50%', bottom: 0 , padding:size.padingLarge}  ,

  title:{
    fontSize:FontSize.FontLarge , 
    color:color.white , 
    fontWeight:'700'
  } , 
  subtitle:{
    color:'gray' , 
    fontSize:14 , marginTop:size.marginSmall
  } , 
  
mrt32:{
  marginTop:size.marginLarge
},
mrt16:{
  marginTop:size.marginSmall
}
});
