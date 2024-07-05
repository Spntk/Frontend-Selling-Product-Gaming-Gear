
import { Link } from 'react-router-dom'

const Cards = ({filterItems}) => {  //และทำการรับค่จาก state filterItems
  return (
    <div className='grid grid-cols-4 items-center justify-center gap-12'>
      {
        filterItems.map((item) => (
          //ใช้ map เพื่อทำการวนลูปในข้อมูล array ที่เก็บไว้ใน state ทำให้รูปแบบข้อมูลที่ออกมาไม่ซ้ำกัน
          //โดยแต่ละการวนลูปก็จะทำการสร้าง div card ขึ้นมาใหม่ทุกรอบพร้อมกับข้อมูลใน array ที่ไม่ซ้ำกัน
            <div key={item.id}>

                <Link to={`/shop/${item.id}`}>
                    <img src={item.image} alt="" className='mx-auto w-full hover:scale-105 transition-all duration-300' />
                  

                  <div className='pt-4 px-4'>
                      <h4 className='text-base font-semibold mb-2'>{item.title}</h4>

                  <div className='flex justify-between'>
                          <p className='text-black/50'>{item.category}</p>
                          <p className='font-semibold'>฿{item.price}</p>
                      </div>
                  </div>

                </Link>

            </div>
        ))
      }
    </div>
  )
}

export default Cards
