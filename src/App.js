import Footer from "./components/footer/Footer";
import Dashboard2 from "./components/dashboard/Dashboard2";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Dashboard2 />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
