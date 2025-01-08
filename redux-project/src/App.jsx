import { Routes, Route } from "react-router-dom"
import { Main, Register, Login, Navbar, PageNotFound } from "./components"
const App = () => {
  return (
    <div className="container ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
