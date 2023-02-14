import "./App.css";
import Auth from "./components/Content/Authorization/Auth";
import SideBar from "./components/Content/QA/Sidebar.jsx";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Header/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <Auth />
      <Footer />
    </div>
  );
}

export default App;
