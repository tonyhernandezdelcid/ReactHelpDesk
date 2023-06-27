
import Inicio from './componentes/inicio/Inicio';
import SignIn from './componentes/login/SignIn';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";


function App() {
  return (
    <Router>

      <Routes>
        <Route path='/login' element={<SignIn></SignIn>}>

        </Route>

        <Route path='/home' element={<Inicio></Inicio>}>

        </Route>

      </Routes>

    </Router>
  );
}

export default App;
