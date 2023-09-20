import React from "react";
import GlobalStyle from "./styles/global";
import { AuthProvider } from "./contexts/auth";
import RoutesApp from "./routes";

const App = () => (
  <AuthProvider>
    <RoutesApp />
    <GlobalStyle />
  </AuthProvider>
);

export default App;
