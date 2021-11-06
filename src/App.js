import './App.css';
import Routes from './Routes';
import React from 'react';

export const StoreContext = React.createContext({});
const initialData = {
  user: null,
  isAuthenticated: false
};

function App() {
  return (
    <StoreContext.Provider value={initialData}>
      <div className="App">
        <Routes />
      </div>
    </StoreContext.Provider>
  );
}

export default App;