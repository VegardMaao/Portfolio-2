import { GlobalStyle } from './styles';
import { portfolioItems } from './components/dataObjects/portfolioObjects';

function App() {
  console.log(portfolioItems);

  return (
    <>
      <GlobalStyle />
      <h1>HELLO WORLD</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, reprehenderit, vitae ratione
        vero nemo ad dolore voluptates illo voluptatibus facere excepturi quis suscipit quaerat
        deserunt distinctio nesciunt quas sapiente accusantium?
      </p>
    </>
  );
}

export default App;
