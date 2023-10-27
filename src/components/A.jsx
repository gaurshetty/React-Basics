import React, { createContext } from 'react'
import B from './B'

const nameContext = createContext();

function a() {
    const greet = 'Hello';
    const name1 = "Gajanan";
    const last1 = "shetty";
  return (
    <div>
      <nameContext.Provider value={{name1, last1}}>
            <B greet={greet}/>
      </nameContext.Provider>
    </div>
  )
}

export default a;
export {nameContext};