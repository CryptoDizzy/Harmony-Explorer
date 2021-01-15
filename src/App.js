import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import {
  Switch,
  Route
} from "react-router-dom";
import interestTheme from './theme';
import Testone from './components/testone';

export default function App() {
  
  return (
    
    <MuiThemeProvider theme={ createMuiTheme(interestTheme) }>
      <Testone/>
      <CssBaseline />

    </MuiThemeProvider>
  )
}
