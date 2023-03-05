import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import LabKeyTheme from '../themes/LabKeyTheme'

export default function TelaA() {

  const navigation = useNavigation();

  const func = () => (
    navigation.navigate('TelaB')
  );

  return (
    <View style={styles.container}>
      <Text style={{color:LabKeyTheme.OnBackGroundColor, fontSize: 24}}>Sou a tela A</Text>
      <Button title='Ir para tela B' onPress={func} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: LabKeyTheme.BackGroundColor,
  },
});
