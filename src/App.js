import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';

function App() {
  let todos=[
    {
      sno:1,
      title: "Go to the market",
      desc: "To buy bread & butter"
    },
    {
      sno:2,
      title: "Go to the mall",
      desc: "To buy shirts & pants"
    },
    {
      sno:3,
      title: "Go to the liabrary",
      desc: "To return the issued books"
    }

  ]
  return (
    <>
      <Header title="MyToDoList" searchbar={true}/>
      <Todos t={todos}/>
      <Footer/>
    </>
  );
}


export default App;


//To return anything via a function we always use wraps <>..</>