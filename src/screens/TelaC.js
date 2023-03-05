import { StyleSheet, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import LabKeyTheme from '../themes/LabKeyTheme'

export default function TelaC({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color:LabKeyTheme.OnBackGroundColor}}>Sou a tela C</Text>
      <Button title='Logar' onPress={() => navigation.navigate('TelaA')} />
    </SafeAreaView>
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
