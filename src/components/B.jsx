import React from 'react'
import C from './C'


function B(props) {
  return (
    <div>
      <C greet={props.greet}/>
    </div>
  )
}

export default B
