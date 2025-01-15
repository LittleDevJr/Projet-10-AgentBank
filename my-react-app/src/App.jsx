import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './style/header.css';
import './style/footer.css';
import './style/features.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import SignIn from "./pages/sign-in";
import User from "./pages/user";


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
