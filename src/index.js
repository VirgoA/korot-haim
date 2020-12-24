import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import './index.css';
import store from './store'
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import RTL from './utils/rtl';


const theme = createMuiTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: blue[600]
    }
  }
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
