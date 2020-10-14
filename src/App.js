import React from "react";

import "./App.css";
import Header from "./componrnt/Header";
import Sidebar from './componrnt/SideBar/Sidebar';
import Feed from './componrnt/Feed/Feed';
import Widget from './componrnt/Widget/Widget';
import Login from './componrnt/Login/Login';
import { useStateValue } from "./componrnt/contexApi/StateProvider";


function App() {

  const [{ user }, dispatch] = useStateValue();



  return (
    <div className="app">
      {!user ? (<Login />) :
        (
          <div>
            <Header />
            <div className="app_body">
              <Sidebar />
              <Feed />
              <Widget />
            </div>
          </div>

        )}


    </div>
  );
}

export default App;
