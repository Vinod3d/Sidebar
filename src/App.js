import Home from "./Home";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Home/>
      <Modal/>
      <Sidebar/>
    </div>
  );
}
