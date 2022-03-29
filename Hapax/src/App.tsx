import { NextUIProvider } from '@nextui-org/react';
import { NavBar } from './Components/NavBar';
import { useTheme } from './Hooks/useTheme';
import { Home } from './Pages'
import { IsMobileProvider } from './Providers/IsMobileContext';

const App = () => {

  const { theme, setTheme } = useTheme();

  return (
    <NextUIProvider theme={theme}>
      <IsMobileProvider>
        <NavBar onThemeChange={setTheme}/>
        <Home />
      </IsMobileProvider>
    </NextUIProvider>
  );
};

export default App;

