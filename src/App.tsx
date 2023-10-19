import Companies from './Componant/Companies'
import './App.css'
import {BrowserRouter,Routes, Route } from 'react-router-dom'
import Error from './Componant/Error'
import Home from './Componant/Home'
import SingleCompany from './Componant/SingleCompany'

function App() {
 

  return (
<>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/Companies' element={<Companies /> }/>
  <Route path='/Companies/:id' element={<SingleCompany />}/>
  <Route path='*' element={<Error />} />
</Routes>
</BrowserRouter>
</>
  )}

export default App