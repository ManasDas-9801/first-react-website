import './App.css';

import Header from './components/header'
import Footer from './components/footer'
import Cover from './components/cover'

import Content from './components/content';

function App() {
  return (
    <div className="App">
       <Header />
       <Cover />
       <Content />
       <Footer />
    </div>
    
  );
}

export default App;
