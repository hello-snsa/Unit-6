import './App.css';
import React from 'react'
import Temp from './components/Temp';

function App() {

  // let inp1 = useRef();
  // let inp2 = useRef();
  // let inp3 = useRef();
  // let inp4 = useRef();

  // let handleChange = (e, inpF, inpB) => {

  //   let len = e.target.value.length;
  //   if (len === 4) {
  //     inpF.current.focus();
  //   }
  //   if (len === 0) {
  //     inpB.current.focus();

  //   }


  // }


  return (
    <div className="App">
      <Temp />
      {/* 

      <input type="text" maxLength="4" onChange={(e) => handleChange(e, inp2, inp1)} ref={inp1} />
      
      <input type="text" maxLength="4" ref={inp2} onChange={(e) => handleChange(e, inp3, inp1)} />
      <input type="text" maxLength="4" onChange={(e) => handleChange(e, inp4, inp2)} ref={inp3} />
      <input type="text" maxLength="4" onChange={(e) => handleChange(e, inp4, inp3)} ref={inp4} /> 
      
      */}



    </div>
  );
}

export default App;
