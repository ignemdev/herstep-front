import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom';
import HerStepApp from '@/HerStepApp';

export const appRouting = createBrowserRouter([
    {
        path: '*',
        element: <Navigate to='/' replace/>
    },
    {
        path: '/*',
        element: <HerStepApp/>,
        children: [
            {
                element: <HerStepApp/>,
                index: true
            },
            // {
            //     path: 'facturas',
            //     element: <InvoicesPage/>,
            // },
            // {
            //     path: 'facturas/nueva',
            //     element: <DebtorPage/>
            // }
        ]
    }
])