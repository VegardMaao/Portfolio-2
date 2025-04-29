import { GlobalStyle } from './styles';
import { DisplayPortfolio } from './components/portfolioCards';
import { AboutMe } from './components/aboutMe';

function App() {
  return (
    <>
      <GlobalStyle />
      <AboutMe />
      <DisplayPortfolio />
    </>
  );
}

export default App;
