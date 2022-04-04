import "./App.css";
import Getuser from "./Components/Getuser";
import FetchUsers from "./context/FetchUsers";

function App() {

  return (
    <>
      <FetchUsers>
        <Getuser/>
      </FetchUsers>
    </>
  );

}

export default App;

