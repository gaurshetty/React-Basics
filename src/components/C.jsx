import React, { useContext } from 'react';
import { nameContext} from './A';

const C = (props) =>{
  const useCon = useContext(nameContext);
  return (
    <h1>{props.greet}: {useCon.name1} {useCon.last1}</h1>
  );
};

export default C;
