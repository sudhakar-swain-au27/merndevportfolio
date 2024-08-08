import React from 'react';
import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-2 items-center gap-16'>
          <img src={aboutSvg} className='w-full h-64 object-cover' alt='About' />
          <article>
            <SectionTitle text='About Me' />
            <p className='text-slate-600 mt-8 leading-loose'>
              As a MERN Stack Developer with over 3.5 years of experience, I specialize in building robust web applications using React.js, Redux, Node.js, and Express.js. My expertise extends to developing RESTful APIs, implementing business logic layers, and working with both relational and non-relational databases like MySQL and MongoDB. I am proficient in using unit testing frameworks such as Jest. My objective is to leverage my skills and knowledge to contribute to the growth and success of an innovative organization.
            </p>
            <a
              href='/sudhakar_swain.pdf'
              download
              className='inline-block mt-8 px-6 py-2 bg-emerald-600 text-white font-semibold rounded hover:bg-emerald-700 transition duration-300'
            >
              Download Resume
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
