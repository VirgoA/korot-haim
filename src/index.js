import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import './index.css';
import store from './store'
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import RTL from './utils/rtl';


const theme = createMuiTheme({
  direction: 'rtl',
  palette: {
    type: 'dark',
  },
});

ReactDOM.render(
  <React.StrictMode>
    <RTL>
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </MuiThemeProvider>
    </RTL>
  </React.StrictMode>,
  document.getElementById('root')
);
