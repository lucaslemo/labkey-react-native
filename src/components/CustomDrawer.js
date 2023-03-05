import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

// Carregando o Tema
import AppKeyTheme from '../themes/LabKeyTheme';

export default function CustomDrawer(props){
    return(
        <View style={styles.container}>
          <DrawerContentScrollView contentContainerStyle={{ backgroundColor: AppKeyTheme.PrimaryColor }} {...props}>
            <View style={styles.header}>
              <Text style={[styles.text, {fontSize: 24}]}>
                LabKey
              </Text>
              <Text style={[styles.text, {fontSize: 18}]}>
                Usuario: Lukinha
              </Text>
              <Text style={styles.text}>
                Email: lukinha@email.com
              </Text>
            </View>
            <View style={styles.listContent}>
              <DrawerItemList {...props} />
            </View>
          </DrawerContentScrollView>
          <View style={styles.bottom}>
            <Text>Titan Tech</Text>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: AppKeyTheme.BackGroundColor,
    },
    text:{
      color: AppKeyTheme.OnPrimaryColor,
    },
    listContent:{
      flex: 1,
      backgroundColor: AppKeyTheme.BackGroundColor,
      paddingTop: 10
    },
    header:{
      paddingHorizontal:10,
    },
    bottom:{
      padding: 20,
      borderTopWidth: 1,
      borderTopColor: '#999999'
    }
  });