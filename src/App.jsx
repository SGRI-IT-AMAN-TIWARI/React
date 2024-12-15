import react from "react"
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Home from "./components/Home.jsx"
import Company from "./components/Company.jsx"

const App = function(){
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/company" Component={Company}></Route>
      </Routes>
    </BrowserRouter> 
    </>
  )
}
export default App