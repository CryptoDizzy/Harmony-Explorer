import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import interestTheme from './theme';
import Enterbox from './components/enterbox';

export default function App() {
  
  return (
    
    <MuiThemeProvider theme={ createMuiTheme(interestTheme) }>
      
      <Enterbox/>
      <CssBaseline />

    </MuiThemeProvider>
  )
}
