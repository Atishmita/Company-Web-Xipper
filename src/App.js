import { Route, Routes } from "react-router-dom";
import Create from "./Components/Create";
import Read from "./Components/Read";
import Edit from "./Components/Edit";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Read/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/edit" element={<Edit/>}/>
      </Routes>
    </div>
  );
}

export default App;


