import {StyleSheet} from 'react-native';
import {color} from '../../constants/constants';

export const styleDetail = StyleSheet.create({
  containerHeader: {width: '100%', height: 400},

  viewToolbarHeader: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  stylebookmark: {tintColor: color.primaryColor, width: 30, height: 30},
  styleIcon: {width: 30, height: 30 , tintColor:color.primaryColor},
  containerBlurView: {
    overflow: 'hidden',
    position: 'absolute',
    bottom: 15,
    width: '90%',
    left: '5%',
    borderRadius: 20,
  },
  ContainerTitleHeader: {
    padding: 20,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imgavt: {width: 50, height: 50, borderRadius: 25},

  imgavtmr: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: -25,
  },
  txtrecipt: {color: color.graysearch, fontSize: 12, paddingLeft: 20},
  txtName: {
    color: color.white,
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 20,
  },

  viewHeaderTtile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pd10: {padding:10 },
  width50: {width: '50%'},
  Title: {fontWeight: 'bold', fontSize: 24, paddingBottom: 10},
  aliFlex_End: {alignItems: 'flex-end'},
  pdt_pdbtom: {paddingTop: 10, paddingBottom: 10},
});
