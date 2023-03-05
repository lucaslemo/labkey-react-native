import { NavigationContainer } from '@react-navigation/native';

// Rotas do App
import { MainRoutes } from './mainRoutes';

export function Routes(){
  return(
    <NavigationContainer>
      <MainRoutes />
    </NavigationContainer>
  )
}