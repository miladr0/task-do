import React from "react";

import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex antialiased min-h-screen bg-taskDo-gray h-screen">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
