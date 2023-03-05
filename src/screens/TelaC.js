import { StyleSheet, Text, Button, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, StackActions } from '@react-navigation/native'
import LabKeyTheme from '../themes/LabKeyTheme'

export default function TelaC() {

  const navigation = useNavigation();

  const logar = () => {
    navigation.dispatch(
      StackActions.replace('home')
    );

  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Login</Text>
        </View>
        <Text style={styles.text}>Sou a tela C</Text>
        <Button title='Entrar' onPress={logar} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: LabKeyTheme.BackGroundColor,
  },
  text: {
    fontSize: 24,
    color: LabKeyTheme.OnBackGroundColor
  },
});
