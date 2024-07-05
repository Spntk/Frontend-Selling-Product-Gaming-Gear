import { useEffect, useState } from 'react'
import Cards from '../../components/Cards'

const Allproduct = () => {


    // Use State เมื่อเราต้องการให้เว็บไซด์เกิดการเปลี่ยนแปลงขึ้นของหน้า ui เราจะใช้ State ในการเปลี่ยนแปลง
    const [products, setProducts] = useState([])
    const [filteredItems, setfilteredItems] = useState([])
    
    // Fetching data from json ใช้ useEffect เพื่อทำการเรียกข้อมูลที่อยู่ภายนอกของ react
    useEffect(() => {
        const fetchData = async () => {  //เรียกฟังก์ชั่น fetchdata เพื่อทำการโหลดข้อมูล async / await ทำให้การโหลดข้อมูลไม่ต้องบล็อคการทำงานของหน้าเว็บไซด์
            try{
                const response = await fetch("/products.json") //ทำการใช้ await เพื่อรอการเรียก API จนเสร็จ
                const data = await response.json() //แปลงข้อมูลที่ได้รับจาก json เก็บไว้ในตัวแปร data ในรูปแบบ qrray
                setProducts(data) //ทำการอัพเดท state ให้ setProducts
                setfilteredItems(data) //ทำการอัพเดท state ให้ setfilteredItems
            } 
            catch (error) {
                console.log("Error fetching data",error) //ตรวจจับข้อผิดพลาดในการดึงข้อมูล
            }
        }
        fetchData() //เรียกฟังก์ชั่น fetch data 
    },[])


    // Filter fuction
    const filterItems = (category) => { //สร้างตัวแปร filterItems ที่รับพารามิเตอร์เป็น category
        const filtered = category === "all" ? (products) : products.filter((item) => item.category === category) //สร้างตัวแปร item เปรียบเทียบว่า mouse.category === category 
        // สร้างตัวแปร filtered โดยใช้เงื่อนไข ternary operator
        // ถ้า category เป็น "all" ให้ filtered เป็น products ทั้งหมด
        // ถ้าไม่ใช่ ให้ filtered เป็น products ที่ผ่านการกรองเฉพาะ category ที่ระบุ

        setfilteredItems(filtered) //ทำการอัพเดท state ว่าได้ผ่านการกรองข้อมูลแล้ว
    }

    // show all products

    const showAll = () => {
        setfilteredItems(products)
    }


  return (
    <div className='max-w-screen-2xl mx-auto'>
        <h2 className='text-3xl font-semibold text-center py-8'>Our All Product</h2>

        <div className='flex flex-wrap items-center py-3'>

            <div className='flex flex-row justify-start items-center gap-8 pb-3'>
                <button onClick={showAll}>All Products</button>
                
                <button onClick={() => filterItems("Mouse")}>Mouse</button>
                <button onClick={() => filterItems("Keyboard")}>Keyboard</button>
                <button onClick={() => filterItems("Headphone")}>Headphone</button>
                <button onClick={() => filterItems("Microphone")}>Microphone</button>
                <button onClick={() => filterItems("Controller")}>Controller</button>
                <button onClick={() => filterItems("Mousepad")}>Mousepad</button>
            </div>

            <Cards filterItems={filteredItems}/>

        </div>

    </div>
  )
}

export default Allproduct
