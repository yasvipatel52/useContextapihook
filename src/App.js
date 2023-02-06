import logo from './logo.svg';
import './App.css';
import ChildA from './ChildA'
import { createContext } from 'react';

const data=createContext();
const data1=createContext();

function App() {
  const name="Yasvi";
  const gender="Female";
  return (
    <>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <ChildA/>
        </data1.Provider>
      </data.Provider>
    </>
  );
}

export default App;
export {data,data1} 
