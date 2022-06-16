import React from 'react';
import 'antd/dist/antd.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Sellers} from "./seller/Sellers";
import {Seller} from "./seller/Seller";

function App() {
  return (
      <Router>
          <Switch>
                <Route key={"main"} exact path={"/"} component={Sellers}/>
                <Route key={"seller"} exact path={"/seller/:id/campaigns"} component={Seller}/>
          </Switch>
      </Router>
  );
}

export default App;
