import { links } from '../assets/data';

const Navbar = () => {
  return (
    <nav className='bg-emerald-100'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center py-4'>
          <h2 className='text-3xl font-bold'>
            mern<span className='text-emerald-600'>Dev</span>
          </h2>
          <div className='flex gap-x-4'>
            {links.map((link) => {
              const { id, href, text } = link;
              return (
                <a
                  key={id}
                  href={href}
                  className='capitalize text-lg tracking-wide hover:text-emerald-600 duration-300'
                >
                  {text}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
