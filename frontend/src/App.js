import React from 'react';

import './global.css';

//import Header from './Header';
//import Logon from './pages/Logon'; //Quando importa uma pasta sempre procura pelo index la dentro

import Routes from './routes';

function App() {
  return (
    <Routes />
  );
}

// // Um componente no React nada mais é do que uma função que retorna um HMTL 
// //Quando um HTML está escrito dentro do JS chamados de JSX (JavaScript XML)
// function App() {

//   const [counter, setCounter] = useState(0);

//   //Quando se usa o useState ele retorna um array
//   //Array [valor, funcaoDeAtualizacao]

//   function increment() {
//     setCounter(counter + 1);
//   }

//   return (
//     // <Header title="Semana Omnistack" /> //uma opcao
//     // <Header>
//     //   Semana Omnistack
//     // </Header>

//     <div>
//       <Header>
//         Contador: {counter}
//       </Header>
//       <button onClick={increment}>Incrementar</button>
//     </div>

//   );
// }

export default App;
