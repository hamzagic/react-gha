import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <RouterProvider router={router} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
