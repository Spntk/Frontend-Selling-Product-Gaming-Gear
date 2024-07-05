
import { Link } from 'react-router-dom'

import { FaShoppingBag } from "react-icons/fa";
import { IoGameControllerOutline } from "react-icons/io5";

const Navbar = () => {

  return (
    <div className='max-w-screen-2xl mx-auto'>
        <nav className='flex justify-between pt-6 pb-3'>

            <Link to="/">
                <IoGameControllerOutline className='text-black w-10 h-10' />
            </Link>

            <Link to="/" className="font-primary font-semibold text-3xl hover:text-blue-500">
                iHAVEUPC
            </Link>

            <Link to="/" className='flex text-lg items-center gap-2 hover:text-blue-500'>
                <FaShoppingBag />Cart
            </Link>
                
        </nav>

        <div className='pt-2'>

            <hr />

        </div>

        <div className='flex justify-start gap-10 text-lg font-semibold pt-4'>

                <Link className='hover:text-blue-500' to='/'>
                    Home
                </Link>

                <Link className='hover:text-blue-500' to='/productall'>
                    Product
                </Link>
                
        </div>
    </div>
  )
}

export default Navbar
