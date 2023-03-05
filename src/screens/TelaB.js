import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import LabKeyTheme from '../themes/LabKeyTheme'

export default function TelaB() {

  const navigation = useNavigation();

  const func = () => (
    navigation.navigate('TelaA')
  );

  return (
    <View style={styles.container}>
      <Text style={{color:LabKeyTheme.OnBackGroundColor, fontSize: 24}}>Sou a tela B</Text>
      <Button title='Ir para Tela A' onPress={func} />
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
