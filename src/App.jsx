import { Outlet } from 'react-router-dom' //เมื่อเราใช้ฟังก์ชั่น Children ทำให้การเรียก components จะเรียกแค่ตัวแม่ขึ้นมาอย่างเดียว ทำให้ลูกไม่แสดงผลการทำงาน การเรียกใช้ outlet คือการทำให้ components ที่เรียกเกิดการ Render ต่อจากฟังก์ชั่นแม่
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
