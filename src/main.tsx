import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from "./pages/Home.tsx";
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SalesItems from './pages/SalesItems.tsx';
import Reciept from './pages/Reciept.tsx';
import OminiChannel from './pages/OminiChannel.tsx';
import Customer from './pages/Customer.tsx';
import { Provider } from 'react-redux';
import store from './store/store.ts';
const route = createBrowserRouter([
  {
    path:"",
    element: <App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"salesitems",
        element:<SalesItems/>
      },
      {
        path:"customer",
        element:<Customer/>
      },
      {
        path:"omini-channel",
        element:<OminiChannel/>
      },
      {
        path:'reciept',
        element:<Reciept/>
      }
    ]
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={route}/>
    </Provider>
  </StrictMode>,
)
