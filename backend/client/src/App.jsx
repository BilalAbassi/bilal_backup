import Home from "./pages/Home"
import Aboutus from "./pages/Aboutus"
import ContactUs from "./pages/ContactUs"
import Policy from "./pages/Policy"
import Pagenotfound from "./pages/Pagenotfound"
import { Route,Routes} from "react-router-dom"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import { Toaster } from 'react-hot-toast';
import Dashboard from "./pages/user/Dashboard"
import PrivateRoute from "./compunents/Routes/Private"
import ForgetPassword from "./pages/Auth/ForgetPassword"
import AdminRoute from "./compunents/Routes/AdminRoute"
import AdminDashboard from "./pages/Admin/AdminDashboard"
import CreateCategory from "./pages/Admin/CreateCategory"
import CreateProduct from "./pages/Admin/CreateProduct"
import Users from "./pages/Admin/Users"
import Orders from "./pages/user/Orders"
import Profile from "./pages/user/Profile"
import Products from "./pages/Admin/Products"
import UpdateProduct from "./pages/Admin/UpdateProduct"
import Search from "./pages/Search"

function App() {

  return (
    <>
    <div>
     <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/search" element={<Search />} />

<Route path="/dashboard" element={<PrivateRoute/>}>
<Route path="" element={<Dashboard/>}/>
<Route path="user/orders" element={<Orders />} />
<Route path="user/profile" element={<Profile />} />

</Route>

<Route path="/dashboard" element={<AdminRoute/>}>
<Route path="admin" element={<AdminDashboard/>}/>
<Route path="admin/create-category" element={<CreateCategory/>}/>
<Route path="admin/create-product" element={<CreateProduct/>}/>
<Route path="admin/product/:slug" element={<UpdateProduct />} />

<Route path="admin/products" element={<Products/>}/>

<Route path="admin/users" element={<Users />} />




</Route>

<Route path="/about" element={<Aboutus/>}/>
<Route path="/contact" element={<ContactUs/>}/>
<Route path="/Policy" element={<Policy/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/forgot-password" element={<ForgetPassword/>}/>


<Route path="*" element={<Pagenotfound/>}/>




      
     </Routes>
     <Toaster/>
   </div> </>
  )
}

export default App
