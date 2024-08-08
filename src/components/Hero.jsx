import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='bg-emerald-100 py-24 font-poppins'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-2 items-center gap-8'>
          <article>
            <h1 className='text-5xl lg:text-7xl font-extrabold tracking-wide leading-tight text-gray-900'>
              I'm Sudhakar
            </h1>
            <p className='mt-4 text-2xl lg:text-3xl text-slate-700 font-medium capitalize tracking-wide'>
              MERN-Stack Developer
            </p>
            <p className='mt-2 text-lg lg:text-xl text-slate-700 capitalize tracking-wide'>
              Turning ideas into interactive reality
            </p>
            <div className='flex gap-x-4 mt-4'>
              <a href='https://github.com/sudhakar-swain-au27'>
                <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black transition duration-300' />
              </a>
              <a href='https://www.linkedin.com/in/fullstacksudhakar-swain-7110b1171/'>
                <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black transition duration-300' />
              </a>
            </div>
          </article>
          <article className='hidden md:block'>
            <img src={heroImg} className='w-full h-80 lg:h-96 object-cover' alt='Hero' />
          </article>
        </div>
      </div>
    </div>
  );
};

export default Hero;
