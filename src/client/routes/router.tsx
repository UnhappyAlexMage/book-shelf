import { createBrowserRouter } from "react-router";

import App from "../App";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <></>,
        children: [
            {
                index: true,
                lazy: () => import('../pages/LibraryPage').then(module => ({ Component: module.default })),
                handle: { 
                    title: '', 
                    showInMenu: true 
                }
            },
            {
                path: 'map',
                lazy: () => import('../pages/MapPage').then(module => ({ Component: module.default })),
                handle: { 
                    title: 'map', 
                    showInMenu: true 
                }
            },
            {
                path: 'about',
                lazy: () => import('../pages/AboutPage').then(module => ({ Component: module.default })),
                handle: { 
                    title: 'about', 
                    showInMenu: true 
                }
            },
            {
                path: 'login',
                lazy: () => import('../pages/LoginPage').then(module => ({ Component: module.default })),
                handle: { 
                    title: 'login', 
                    showInMenu: true 
                }
            },
            {
                path: 'detailsBookPage/:bookId',
                lazy: () => import('../pages/DetailsBookPage').then(module => ({ Component: module.default })),
                handle: { 
                    title: 'details selected book',
                    showInMenu: true
                }
            },
        ]

    }
]);

export default router;