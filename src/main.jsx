import React from 'react';
import ReactDOM from 'react-dom/client';
import {Routes} from './routes';
import { ThemeProvider } from 'styled-components'; //O tema permite controlar o design geral do seu projeto com cores, fontes, tamanhos, espaçamento, etc.
import theme from './styles/theme'; // importação das cores padronizadas do theme
import GlobalStyles from "./styles/global" // importação dos estilos globais do css da aplicação
import {AuthProvider} from "./hooks/auth"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> 
      <GlobalStyles/> 
    <AuthProvider>
    <Routes/>
    </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
