import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//Прокидываем состояние в реакт
import { Provider } from 'react-redux';
import { store } from './store';
//Установка react и typeScript
//npx create-react-app . --template typescript
//Установка redux и axios
// npm i @types/react-redux redux react-redux redux-thunk axios
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

