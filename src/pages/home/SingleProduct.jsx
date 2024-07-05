import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaArrowAltCircleLeft , FaStar } from 'react-icons/fa'


const SingleProduct = () => {
    const {id} = useParams()  //เพื่อดึงค่าพารามิเตอร์ที่มีชื่อว่า id ออกมาและใช้ค่า id ในการดึงข้อมูลออกมาจาก json 
    const [products, setProducts] = useState([]) 
    const [amount, setAmount] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch("/products.json") //ทำการใช้ await เพื่อรอการเรียก API จนเสร็จ
                const data = await response.json() //แปลงข้อมูลที่ได้รับจาก json เก็บไว้ในตัวแปร data ในรูปแบบ qrray
                const product = data.filter((p) => p.id == id) //ทำการเปรียบเทียบข้อมูล id ใน json ว่า id ที่ได้มากับ id ใน url ตรงกันหรือไม่ถ้าตรงก็เก็บในตัวแปร
                setProducts(product[0]) //อัพเดท state product array เป็น 0 เพราะมึข้อมูลตัวเดียวที่ตำแหน่ง array 0
            } 
            catch (error) {
                console.log("Error fetching data",error)
            }
        }
        fetchData()
    },[id]) //ให้ id เป็นตัวเปลี่ยนแปลงเมื่อ id มีการเปลี่ยนก็จะทำการเรียก useEffect ใหม่ทั้งหมด

    const {title, category, price, image, spec, pros1, pros2, cons1, cons2, star} = products //เมื่อ state อัพเดทเสร็จเราก็สามารถดึง object ออกไปใช้งานได้
  return (
    
    <div className='max-w-screen-2xl mx-auto mt-5'>

        <Link to="/productall" className='text-gray-600 hover:text-blue-500'>
            <div className='text-lg text-black hover:text-blue-400 transition duration-150 flex items-center gap-1'>
                <FaArrowAltCircleLeft/> Back to Shop
            </div>
        </Link>

        <div className='flex gap-16 items-center mt-5'>

            <div className='flex flex-col gap-6 w-2/4'>
                <img src={image} alt="" className='w-full h-full hover:scale-105 transition duration-150'/>
            </div>

            <div className='flex flex-col gap-4 w-1/2'>
                <div>
                    <p className=' text-blue-500 font-semibold'>{category}</p>
                    <h1 className='text-2xl font-bold'>{title}</h1>
                </div>

                    <p className='text-gray-700'>
                        {spec}
                    </p>

        <div>
            <div className='my-2 text-xl text-yellow-400 flex items-center gap-1'>
                    <FaStar/> {star}
            </div>
            <p className='font-semibold'>ข้อดี</p>
                <li>{pros1}</li>
                <li>{pros2}</li>
                     
            <p className='font-semibold'>ข้อเสีย</p>
                <li>{cons1}</li>
                <li>{cons2}</li>
        </div>

        <h6 className='text-2xl font-semibold'>฿ {price}</h6>
        
            <div className='flex items-center gap-12'>
                    <div className='flex items-center'>
                        <button className='py-2 px-5 text-blue-500 text-3xl' onClick={() => setAmount(amount - 1)}>-</button>
                        <div className='py-4 px-6 rounded-lg'>{amount}</div>
                        <button className='py-2 px-4 text-blue-500 text-3xl' onClick={() => setAmount(amount + 1)}>+</button>
                    </div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-16 rounded-xl transition duration-150'>Add to Cart</button>
            </div>

            </div>
        </div>
    </div>
    
  )
}

export default SingleProduct
