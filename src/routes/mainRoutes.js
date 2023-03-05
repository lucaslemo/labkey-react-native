import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomAppBar from '../components/CustomAppBar'
import CustomDrawer from '../components/CustomDrawer';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import AppKeyTheme from '../themes/LabKeyTheme';
import TelaA from '../screens/TelaA';
import TelaB from '../screens/TelaB';
import TelaC from '../screens/TelaC';

const Stack = createNativeStackNavigator();
const { Screen, Navigator } = createDrawerNavigator();

function MainScreens(){
  return(
    <Navigator
      drawerContent={props => <CustomDrawer { ...props } />}
      screenOptions={{
        header: ({ navigation }) => <CustomAppBar navigation={ navigation }/>,
        drawerActiveBackgroundColor: AppKeyTheme.PrimaryColor,
        drawerActiveTintColor: AppKeyTheme.OnPrimaryColor,
        drawerInactiveTintColor: '#999999',
        drawerLabelStyle: {marginLeft: -25}
      }}
      initialRouteName='TelaA'
    >
      <Screen
        name='TelaA'
        component={ TelaA }
        options={{
          drawerIcon: ({color}) => (
            <Icon name='home-outline' size={30} color={color}/>
          )
        }}
      />
      <Screen
        name='TelaB'
        component={ TelaB }
        options={{
          drawerIcon: ({color}) => (
            <Icon name='key-outline' size={30} color={color}/>
          )
        }}
      />
    </Navigator>
  )
}

export function MainRoutes(){
  return(
    <Stack.Navigator
      initialRouteName='TelaC'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name='TelaC'
        component={ TelaC }
      />
      <Stack.Screen
        name='home'
        component={ MainScreens }
      />
    </Stack.Navigator>
  )
}