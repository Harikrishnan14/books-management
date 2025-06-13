import { Bounce, ToastContainer } from 'react-toastify'
import './App.css'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from './Layouts/MainLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </BrowserRouter>
    </>
  )
}

export default App
