import CardImg from './assets/123.jpg'
import Cards from './components/Cards';
import Card from './components/Card';
import '../src/index.css';

function App() {

  return (
    <>
        <Cards>
          <Card img={CardImg}/>
          <Card/>
        </Cards>
    </>

  )
}

export default App
