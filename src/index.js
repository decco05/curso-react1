import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Social from './Pages/Social';
import Contador from './Pages/Contador';
import App from './Pages/App';
import Condicoes from './Pages/Condicoes';
import States from './Pages/States';
import Listas from './Pages/Listas';
import FormularioBasico from './Pages/FormularioBasico';
import FormularioBasico3 from './Pages/FormularioBasico3';
import BiscoitoDaSorte from './Pages/BiscoitoDaSorte';
import Cronometro from './Pages/Cronometro';
import ApiRest from './Pages/ApiRest';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <ApiRest />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
