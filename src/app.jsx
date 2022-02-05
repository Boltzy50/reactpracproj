import Header from './sectioning/header';
import Main from './sectioning/main';
import Footer from './sectioning/footer'
import Form from "./sectioning/form"
import './App.css';

const rootElement = document.getElementById("root");

function App() {
  return (
    <div className="y-wrap">
      <Header />
      <Form />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
