import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Carregando o Tema
import AppKeyTheme from './src/themes/LabKeyTheme';

// Carregando arquivo de rotas
import { Routes }  from './src/routes/index';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar 
        style='light'
        backgroundColor={AppKeyTheme.PrimaryVariantColor} 
      />
      <Routes />
    </SafeAreaProvider>
  );
}