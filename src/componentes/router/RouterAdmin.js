import * as React from 'react';
import Inicio from '../inicio/Inicio';
import SignIn from '../login/SignIn';
import { PrivateRoute } from './PrivateRoute';

import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";


function RouterAdmin() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={
          <PrivateRoute>
            <Inicio></Inicio>
          </PrivateRoute>
        }>
        </Route>
        <Route path='/' element={<SignIn></SignIn>}>
        </Route>
      </Routes>
    </Router>
  );
}
export default RouterAdmin;
