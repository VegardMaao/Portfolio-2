import { GlobalStyle } from './styles';
import { DisplayPortfolio } from './components/portfolioCards';
import { AboutMe } from './components/aboutMe';
import { ContactSection } from './components/contact';
import Header from './components/header';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <AboutMe />
      <DisplayPortfolio />
      <ContactSection />
    </>
  );
}

export default App;
