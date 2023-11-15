import React from 'react'
import ReactDOM from 'react-dom/client'
import  AuthProvider  from './Providers/AuthProvider';
import { RouterProvider } from "react-router-dom";
import './index.css'
import router from './Routes/Routes';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    
   <QueryClientProvider client={queryClient}>
    <AuthProvider>
        <HelmetProvider>
        <RouterProvider router={router} />
        </HelmetProvider>
    </AuthProvider>
    </QueryClientProvider>
 
  </React.StrictMode>,
)
 

 

 