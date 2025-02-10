import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { Play,Info } from "lucide-react";
const homescreen = () => {
  return (
    <div className="h-screen text-white  relative ">
      <Navbar />
      <img src="/BB_img.jpg" alt="home img" className="absolute top-0 left-0 w-full h-full object-cover -z-50 " />

      <div className='absolute top-0 left-0 w-full h-full bg-black/50 -z-50' aria-hidden='true' />

      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-32'>
        <div className='bg-gradient-to-b from-black via-transparent to-transparent 	absolute w-full h-full top-0 left-0 -z-10' />
        <div className='max-w-2xl'>
          <h1 className='mt-4 text-6xl font-extrabold text-balance'>
            Breaking Bad
          </h1>
          <p className='mt-2 text-lg'>
            2008 | 18+ | 6 Seasons | Crime TV Shows
          </p>
          <p className="mt-4 text-lg">
            A high school chemistry teacher dying of cancer teams with a former student to secure his family's future by manufacturing and selling crystal meth.
          </p>
        </div>
        <div className="flex mt-8">

          <Link className='bg-white hover:bg-white/80 text-black font-bold py-2 px-4 rounded mr-4 flex items-center' to="/watch/123">
          <Play className="size-6 mr-2 fill-black" />
          Play
          </Link>
          <Link className='bg-gray-500/70 hover:bg-gray-500 text-white py-2 px-4 rounded flex items-center' to="/watch/123">
          <Info className='size-6 mr-2' />
          More info
          </Link>

        </div>
      </div>

    </div>
  )
}

export default homescreen
