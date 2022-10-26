import './App.css';
import GetData from './comonents/GetData';
import Navbar from './comonents/Navbar';
import Data from "./context/Weatherdata";

function App() {
  return (
    <>
      <Data>
        <Navbar />.
        <div className="my-2 d-flex justify-content-center " >
          <GetData/>
        </div>
      </Data>
    </>
  );
}

export default App;
