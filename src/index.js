import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Cliente from './pages/Cliente';
import CadastroCliente from './pages/CadastroCliente';
import reportWebVitals from './reportWebVitals';
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: '/',
    element:<App />
  },
  {
    path: '/login',
    element:<Login />
  },
  {
    path: '/cadastro',
    element:<Cadastro />
  },
  {
    path: '/cadastro-cliente',
    element:<CadastroCliente />
  },
  {
    path: '/cliente',
    element:<Cliente />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider
    router={routes}
  />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
