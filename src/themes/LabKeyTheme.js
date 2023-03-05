import { Appearance } from 'react-native';

if ((Appearance.getColorScheme() === 'dark')){
    theme = {
        name:'dark',
        PrimaryColor:'#3187FF',
        PrimaryVariantColor:'#0055cc',
        OnPrimaryColor:'#fff1cc',
        SecondaryColor:'#1100cc',
        SecondaryVariantColor:'#a299ff',
        OnSecondaryColor:'#fff1cc',
        BackGroundColor:'#1D1D1D',
        OnBackGroundColor:'#FFFFFF',
    }
} else {
    theme = {
        name:'light',
        PrimaryColor:'#3187FF',
        PrimaryVariantColor:'#0055cc',
        OnPrimaryColor:'#fff1cc',
        SecondaryColor:'#1100cc',
        SecondaryVariantColor:'#a299ff',
        OnSecondaryColor:'#fff1cc',
        BackGroundColor:'#fffdf7',
        OnBackGroundColor:'#000000',
    }
}

export default theme;
