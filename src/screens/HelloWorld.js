import { StyleSheet, Text, View } from 'react-native';
import LabKeyTheme from '../themes/LabKeyTheme'

export default function HelloWorld() {
  return (
      <View style={styles.container}>
        <View style={{flex: 1, backgroundColor:LabKeyTheme.PrimaryColor, margin: 24}}>
          <Text style={{color:LabKeyTheme.OnPrimaryColor}}>Hello World</Text>
        </View>
        <View style={{flex: 1, backgroundColor:LabKeyTheme.PrimaryVariantColor, margin: 24}}>
          <Text style={{color:LabKeyTheme.OnPrimaryColor}}>Hello World</Text>
        </View>
        <View style={{flex: 1, backgroundColor:LabKeyTheme.SecondaryColor, margin: 24}}>
          <Text style={{color:LabKeyTheme.OnSecondaryColor}}>Hello World</Text>
        </View>
        <View style={{flex: 1, backgroundColor:LabKeyTheme.SecondaryVariantColor, margin: 24}}>
          <Text style={{color:LabKeyTheme.OnSecondaryColor}}>Hello World</Text>
        </View>
        <View style={{flex: 1, margin: 24}}>
          <Text style={{color:LabKeyTheme.OnBackGroundColor}}>Hello World</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LabKeyTheme.BackGroundColor,
  },
});
