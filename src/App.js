import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Main from './Main'
const App=()=> {
  return (
      <Router>
      <div>
        <Routes>
          <Route path='/' element={<Main/>}/>
        </Routes>
      </div>
      </Router>
  )
}

export default App