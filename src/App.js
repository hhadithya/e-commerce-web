import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from './Components/test';

function App() {
  return (
    <div className="App d-flex flex-wrap justify-content-center">
      <div className="m-2">
        <ProductCard />
      </div>
      <div className="m-2">
        <ProductCard />
      </div>
      <div className="m-2">
        <ProductCard />
      </div>
      <div className="m-2">
        <ProductCard />
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to React</h1>
        <Alert variant="primary">This is a primary alert—check it out!</Alert>
        <Stack direction="horizontal" gap={2}>
  <Button as="a" variant="primary">
    Button as link
  </Button>
  <Button as="a" variant="success">
    Button as link
  </Button>
</Stack>;
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
