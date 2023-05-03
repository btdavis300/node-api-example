import './App.css';
import Delete from './components/Delete';
import Get from './components/Get';
import Post from './components/Post';
import Update from './components/Update';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Node.Js API Example
        <Container>
          <Row>
            <Get />
            <Post />
            <Update />
            <Delete />
          </Row>
        </Container>


      </header>
    </div>
  );
}

export default App;
