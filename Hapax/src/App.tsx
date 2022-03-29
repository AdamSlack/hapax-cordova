import { NextUIProvider } from '@nextui-org/react';
import {
  Routes,
  Route,
  
} from "react-router-dom";
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { useTheme } from './hooks/useTheme'

import './App.css'
import { navLinks } from './consts/NavLinks';
import { HomePage, NextUIRHFDemoPage } from './pages';
import { ThemeProvider } from './Providers/ThemeProvider';

function App() {

  return (
    <ThemeProvider>
      <>
        <Header />
        <div className="content">
          <Routes>
            {
              navLinks.map(({ path, element}) => (
                <Route path={path} element={element} key={path} />
                ))
              }
            <Route path='/' element={<HomePage />} />
            <Route path='/blog/next-ui-react-hook-form' element={<NextUIRHFDemoPage />} />

            <Route path='*' element={<HomePage />} />
          </Routes>
          </div>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;