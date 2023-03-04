import { createBrowserRouter } from 'react-router-dom';
import Home from '../../Pages/Home/Home';

export const Routess = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    }
])


