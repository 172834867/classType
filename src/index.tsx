import 'antd/dist/antd.css'; 
import {Provider} from 'mobx-react'
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import RouterView from './router/RouterView'
import router from './router/index'
import store from './store/index'

ReactDOM.render(
  <Provider {...store}>
    <BrowserRouter>
    <RouterView routes={router.routes}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);