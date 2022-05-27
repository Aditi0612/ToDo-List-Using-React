import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';

function App() {
  return (
    <>
      <Header title="MyToDoList" searchbar={true}/>
      <Todos/>
      <Footer/>
    </>
  );
}


export default App;


//To return anything via a function we always use wraps <>..</>