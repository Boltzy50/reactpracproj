import Header from './sectioning/header';
import Main from './sectioning/main';
import Footer from './sectioning/footer'
import Form from "./components/form"
import './app.css';

const rootElement = document.getElementById("root");

function App() {
  return (
    <div className="y-wrap">
      <Header />
      {/* <Form /> */}
      <Main />
      <Footer />
    </div>
  );
}

export default App;
