import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import HomePage from "./components/Home/HomePage"
import NotFountPage from "./components/ui/NotFountPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFountPage />}></Route>
        </Route>

      </Routes>
    </BrowserRouter>

  )
}

export default App