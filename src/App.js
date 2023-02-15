import "./App.css";
import Auth from "./components/Content/Authorization/Auth";
import HomePage from "./components/Content/pages/HomePage";
import QuestionPage from "./components/Content/QA/QuestionPage";
import SideBar from "./components/Content/QA/Sidebar.jsx";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Header/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Auth />
      <Footer />
    </div>
  );
}

export default App;
