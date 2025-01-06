import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import SignIn from "./components/sign-in";
import User from "./components/user";


function App() {
  return (
    <div>
      <Router>
      <Header />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/user" element={<User />} />
      </Routes>
      <Footer />
      </Router>
    </div>
  )
}


export default App
