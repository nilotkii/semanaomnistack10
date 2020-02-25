//Importan React - Para utilizar o HTML dentro dele <APP /> (JXS = Javascript + HTML)
import React from 'react';
//Importa ReactDOm - Permiti ao React se comunicar com o HTML (Elementos)
import ReactDOM from 'react-dom';
//Importa App.js - 
import App from './App';

//Renderizando/Desenhando/Injetando a estrutura JSX do App.js dentro do elemento <div id=root>
ReactDOM.render(<App />, document.getElementById('root'));
