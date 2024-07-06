import React, {useState} from 'react'
import HookCounter from './HookCounter'

function MouseContainer() {
    const [display, setDisplay] = useState(true)
  return (
    <div>
        <button onClick={() => setDisplay(!display)}>Toggle Display</button>
        {display && <HookCounter />}
    </div>
  )
}

export default MouseContainer