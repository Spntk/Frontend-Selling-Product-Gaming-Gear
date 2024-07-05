
import ReactDOM from 'react-dom/client' //ก็คือ ReactDOM จะทำการสร้าง Virtual DOM ขึ้นมาทำการเรนเดอร์หน้าเสหมือนเว็บไซด์ เมื่อหน้าเว็บมีการเปลี่ยนแปลงเจ้าตัว Virtual DOM จะทำการเรนเดอร์แล้วส่งให้ตัว Brower 
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// createBrowserRouter คือการสร้างเส้นหลักและเส้นทางย่อยโดยการกำหนด path ไปหา componenet อื่นๆใน project นี้ได้
// RouterProvider เป็นส่วนหนึ่งของ BrowserRouter ที่ทำหน้าที่เชื่อมต่อ component ต่างๆใน project และตรวจสอบความถูกต้องของเส้นทาง

import App from './App.jsx'
import Home from './pages/home/Home.jsx';
import Allproduct from './pages/home/Allproduct.jsx';
import SingleProduct from './pages/home/SingleProduct.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path:"/productall",
        element: <Allproduct/>
      },
      {
        path:"/shop/:id",
        element: <SingleProduct/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('myapp')).render( //React DOM จะทำการ render website ขึ้นมาทำให้ react แสดงผลหน้าเว็บไซด์ขึ้นมาได้
  <RouterProvider router={router} />, //โดยที่ {router} ตัวนี้จะทำการเข้าไปตรวจสอบเส้นทางกับ RouterProvider ว่าเส้นทางถูกต้องหรือป่าว
)
