import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Create from './Create.jsx';
import GameProvider from './components/GameProvider.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GameProvider />,
    children: [{
      path: "/",
      element: <App />
    }],
  }, {
    path: "create",
    element: <Create />
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
