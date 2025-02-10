import Home from "./components/Home"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="w-full h-full">
    <Home/>
    <ToastContainer />
    </div>
  )
}

export default App