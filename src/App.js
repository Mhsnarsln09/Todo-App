import Footer from "./components/footer/footer";
import { Login } from "./components/login"
import Data from "./components/data/data";
import { useAuth } from "./context/AuthContext";
import { Header } from "./components/header";

import "./App.css"
function App() {
  const { user } = useAuth()

  return (
    <>
      <Header />
      
      {!user ? <Login /> : <Data />}
      
      <Footer />
    </>

  );
}

export default App;
