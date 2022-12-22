import React from 'react';

import { UserProvider } from './contexts/UserContext'
import RoutesApp from "./routes";

function App() {
  return (
    <>
    <UserProvider>
      <RoutesApp />
    </UserProvider>  
    </>  
  );
}


export default App;
