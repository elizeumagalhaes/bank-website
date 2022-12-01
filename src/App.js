import './App.css';
import Nav from './components/Nav'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Conta from './pages/Conta'
import Beneficios from './pages/Beneficios';
import Cartao from './pages/Cartao';
import Chamada from './pages/Chamada';

function App() {
  return (
    <>
      <Nav />
      <Home />
      <Sobre />
      <Conta />
      <Beneficios />
      <Cartao />
      <Chamada />
    </>
  );
}

export default App;
