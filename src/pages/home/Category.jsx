
import { Link } from 'react-router-dom'

import pic1 from '/images/category/cate1.jpg'
import pic2 from '/images/category/cate2.jpg'
import pic3 from '/images/category/cate3.jpg'
import pic4 from '/images/category/cate4.jpg'
import pic5 from '/images/category/cate5.jpg'

const Category = () => {


  return (
    <div className='max-w-screen-2xl mx-auto'>

        <h1 className='text-2xl font-bold pt-8 pb-4'>Most Popular Gameing Gear</h1>
        <hr/>

        <div className='pt-8 flex'>

            <Link to="/shop/1" ><img src={pic1} alt="" className='w-full hover:scale-105 transition duration-150' /></Link>


                <div className='grid grid-cols-2 gap-2 w-1/2'>
                <Link to="/shop/2" ><img src={pic2} alt="" className='w-full hover:scale-105 transition duration-150' /></Link>
                <Link to="/shop/3" ><img src={pic3} alt="" className='w-full hover:scale-105 transition duration-150' /></Link>
                <Link to="/shop/4" ><img src={pic4} alt="" className='w-full hover:scale-105 transition duration-150' /></Link>
                <Link to="/shop/5" ><img src={pic5} alt="" className='w-full hover:scale-105 transition duration-150' /></Link>
                </div>
            
        </div>

    </div>
  )
}

export default Category