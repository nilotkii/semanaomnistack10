import React, {useState, useEffect} from 'react';
import api from './services/Api';

//Importação CSS (Estilos)
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

// Componente: função que retorna um conteúdo (HTML, CSS ou JS) (Ex. App(), primeira letra sempre maiuscula, um componente por arquivo)
// - Usado quando algo de repete muito dentro do codigo ou para algo isolado
// - Bloco isolado de HTML, CSS e Js, o qual não interfere no restante da aplicação

// Propriedade: atributo dos componentes <Header atributo="valor" />
// - Informações que um componente pai passa para o componente filho
// - Acesso atraves de {props.atributo}

// Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)
// - necessário exportar useState de React
// - função de um componente é criada dentro do componente, function dentro de function
// - Imutabilidade, não altera o valor/dado, cria um novo dado atraves de uma função-suporte
// - useStates: Desistruturação, dividir vetor em variaveis
// -- [variavel valor, função para atualizar valor (setValor)]

function App() {
  //Estados/States
  const [devs, setDevs] = useState([]);


  useEffect(() => {
    //
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data)
    }

    loadDevs();
  }, []); 

  async function handleAddDev(data) {

    const response = await api.post('/devs', data)

    setDevs([...devs, response.data])
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}></DevForm>
      </aside>
      
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev}></DevItem>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
