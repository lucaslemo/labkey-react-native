import React, { useState } from "react";
import { AppBar, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Alert, Modal, Text, TouchableOpacity, View, StyleSheet } from "react-native";

// Carregando o Tema
import AppKeyTheme from '../themes/LabKeyTheme';

export default function CustomAppBar({ navigation }) {

  const [visible, setVisible] = useState(false);

  const options = [
    {
      title:'Configurações',
      icon:'cog-outline',
      action: () => Alert.alert('Setings')
    },
    {
      title:'Sair',
      icon:'logout',
      action: () => navigation.navigate('TelaC')
    }
  ];

  const openSideMenu = () => {
    navigation.openDrawer();
  }

  const openDotMenu = () => {
    setVisible(true)
  }

  return (
    <SafeAreaView>
      <AppBar
        title = 'LabKey'
        color = {AppKeyTheme.PrimaryColor}
        tintColor = {AppKeyTheme.OnPrimaryColor}
        leading = {props => (
          <IconButton 
            icon={props => <Icon name='menu' {...props} />} {...props} 
            onPress={openSideMenu}
          />
        )}
        trailing={props => (
          <IconButton
            icon={props => <Icon name='dots-vertical' {...props} />} {...props}
            onPress={openDotMenu}
          />
        )}
      />
      <Modal transparent visible={ visible }>
        <View style={{ flex: 1 }} onTouchEnd={() => setVisible(false)}>
          <View style={ styles.popUpMenu }>
            {options.map((op, i)=>(
              <TouchableOpacity 
              style={ [styles.option, { borderBottomWidth: i === options.length - 1 ? 0 : 1 }] } 
              key={ i } 
              onPress={ op.action }>
                <Text style={{ color:AppKeyTheme.OnBackGroundColor }}>{ op.title }</Text>
                <Icon
                  name={ op.icon }
                  size={ 20 }
                  color={ AppKeyTheme.OnBackGroundColor }
                  style={{ marginLeft: 10 }}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  popUpMenu: {
    backgroundColor: AppKeyTheme.BackGroundColor,
    borderWidth: 1,
    borderColor: AppKeyTheme.OnBackGroundColor,
    paddingHorizontal: 10,
    position: 'absolute',
    top: 50,
    right: 10,
    alignSelf:"flex-end"
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 7,
    borderBottomColor: '#CCCCCC'
  },
});
