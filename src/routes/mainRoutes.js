import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomAppBar from '../components/CustomAppBar'
import CustomDrawer from '../components/CustomDrawer';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

// Carregando o Tema
import AppKeyTheme from '../themes/LabKeyTheme';

const { Screen, Navigator } = createDrawerNavigator();

import  TelaA  from '../screens/TelaA';
import  TelaB  from '../screens/TelaB';
import  TelaC  from '../screens/TelaC';

export function MainRoutes(){
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
      initialRouteName='TelaC'
    >
    <Screen
        name='TelaC'
        component={ TelaC }
        options={{
          headerShown: false,
          drawerItemStyle: { display: 'none' }
        }}
      />
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