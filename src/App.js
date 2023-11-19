import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import {BASENAME} from "./config/constant";
import {AppProvider} from "./contexts/AppContext";
import routes, {renderRoutes} from "./routes";

function App() {
  return (
      <React.Fragment>
        <Router basename={BASENAME}>
            <AppProvider>{renderRoutes(routes)}</AppProvider>
        </Router>
      </React.Fragment>
  );
}

export default App;
