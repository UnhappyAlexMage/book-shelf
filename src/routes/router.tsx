import { createBrowserRouter } from "react-router";

import App from "../App";

const HomePage = () => import('../pages/LibraryPage').then(module => ({ Component: module.default }));
const MapPage = () => import('../pages/MapPage').then(module => ({ Component: module.default }));
const AboutPage = () => import('../pages/AboutPage').then(module => ({ Component: module.default }));
const LoginPage = () => import('../pages/LoginPage').then(module => ({ Component: module.default }));
const DetailsBookPage = () => import('../pages/DetailsBookPage').then(module => ({ Component: module.default }));

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <></>,
        children: [
            {
                index: true,
                lazy: HomePage,
                handle: { 
                    title: '', 
                    showInMenu: true 
                }
            },
            {
                path: 'map',
                lazy: MapPage,
                handle: { 
                    title: 'map', 
                    showInMenu: true 
                }
            },
            {
                path: 'about',
                lazy: AboutPage,
                handle: { 
                    title: 'about', 
                    showInMenu: true 
                }
            },
            {
                path: 'login',
                lazy: LoginPage,
                handle: { 
                    title: 'login', 
                    showInMenu: true 
                }
            },
            {
                path: 'detailsBookPage/:bookId',
                lazy: DetailsBookPage,
                handle: { 
                    title: 'details selected book',
                    showInMenu: true
                }
            },
        ]

    }
]);

export default router;