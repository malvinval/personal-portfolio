import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import About from './pages/About';
import HomePage from './pages/HomePage';
import reportWebVitals from './reportWebVitals';
import AOS from 'aos';
import "aos/dist/aos.css";

AOS.init({
    duration : 500
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
    children: [
      {
        
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
