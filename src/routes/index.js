import React, { useContext, Fragment } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import Home from "../pages/Home";
import Launches from "../pages/Launches";
import Rockets from "../pages/Rockets";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import ValidationAge from "../pages/validationAge";

function RoutesApp() {
  const [userData, setUserData] = useContext(UserContext)

  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/home" element={<Home nome={userData.nome} />} />

          {/* <Route path='/home'>
            {userData.isLogged ? <Home /> : <Signin />}
          </Route> */}

          <Route path="/validation" element={<ValidationAge idade={userData.idade} nome={userData.nome} />} />
          <Route path="/rocket" element={<Rockets nome={userData.nome} />} />
          <Route path="/lancamentos" element={<Launches nome={userData.nome} porcentagem={userData.porcentagem_lucro} data={userData.data_lancamento}/>} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  )
}


export default RoutesApp;