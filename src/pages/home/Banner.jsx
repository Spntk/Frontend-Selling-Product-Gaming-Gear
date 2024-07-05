
import bannertest from '/images/banner/1.png'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (

    <div class="relative max-w-screen-2xl mx-auto mt-5">

        <img className='rounded-xl' src={bannertest} alt="bannerpicture"/>

        <div className='absolute top-1/4 left-1/2'>

                <h1 className='text-5xl font-light pb-7'>
                  Our Gaming
                </h1>

                <p className='text-xl pb-7'> Gaming equipment refers to the hardware and accessories used for playing video games. This includes devices such as gaming consoles and VR 
                (virtual reality) headsets. Gaming equipment can vary widely in terms of quality, performance, and cost, and is often designed specifically for gaming applications.
                </p>

                 <button className='bg-black hover:bg-blue-500 px-6 py-3 text-white font-semibold rounded-xl transition duration-150'>
                        <Link to="/productall">See All Product !</Link>
                 </button>

        </div>
            
    </div>

  )
}

export default Banner
