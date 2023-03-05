import { StyleSheet, Text, View } from 'react-native';

import LabKeyTheme from '../themes/LabKeyTheme'

export default function TelaB() {
  return (
    <View style={styles.container}>
      <Text style={{color:LabKeyTheme.OnBackGroundColor}}>Sou a tela B</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: LabKeyTheme.BackGroundColor,
  },
});