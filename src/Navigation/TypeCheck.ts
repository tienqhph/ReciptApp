
import type { NativeStackNavigationProp  } from '@react-navigation/native-stack';
import { NAME_SCREENS } from '../constants/constants';
import { RouteProp } from '@react-navigation/native';

export  type RootStackParmsList = {
    Bottomtab?:undefined,
    Home?:undefined , 

    Detail:{
        id:string
    },

    Search:{
        DataSearch:string
    }



}




export type propsStack = NativeStackNavigationProp<RootStackParmsList,NAME_SCREENS.BOTTOMTAB>
export type PropsRoute = RouteProp<RootStackParmsList , NAME_SCREENS.DETAIL>
export type PropsRouteSearch = RouteProp<RootStackParmsList , NAME_SCREENS.SEARCH>