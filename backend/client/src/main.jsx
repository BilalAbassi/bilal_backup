import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { useAuth,AuthProvider } from './context/Auth'
import {BrowserRouter} from "react-router-dom"
import 'antd/dist/reset.css';
import { SearchProvider } from "./context/search";



ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
<AuthProvider> 
<SearchProvider>
   <App />
</SearchProvider>
</AuthProvider>
 
 </BrowserRouter>
)
