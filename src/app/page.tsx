'use client';

import {
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import Image from 'next/image';
import aman from './aman.jpg';
import { navItems, projects, technologiesGroup } from './data';
import Microlink from '@microlink/react';

export default function App() {
  const socialMediaLink = [
    {
      id: 1,
      name: 'Twitter',
      to: 'https://www.facebook.com',
      icon: <FontAwesomeIcon icon={faTwitter} size='1x' />,
    },
    {
      id: 2,
      name: 'LinkedIN',
      to: 'https://www.twitter.com',
      icon: <FontAwesomeIcon icon={faLinkedin} size='1x' />,
    },
    {
      id: 3,
      name: 'Github',
      to: 'https://www.instagram.com',
      icon: <FontAwesomeIcon icon={faGithub} size='1x' />,
    },
  ];

  return (
    <>
      {/* body */}
      <div className='  bg-dark-gray-gradient py-8 px-8 flex flex-col items-center justify-center w-full '>
        {/*  */}
        {/* header */}
        <div className='max-w-[1400px] flex w-full items-center justify-between px-4'>
          {/* left hand side */}
          <div className='text-white flex gap-8 flex-row items-center'>
            <p className='text-2xl'>
              <b> Aman </b>Jat
            </p>
            <ul className='flex text-white gap-4'>
              {navItems.map(item => (
                <li key={item.name} className=''>
                  <a href={item.to} className='underline-animation '>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* right hand side - Social Media Icons */}
          <div className='flex text-white gap-6'>
            {socialMediaLink.map(item => (
              <a
                href={item.to}
                className='flex  flex-row  items-center justify-between gap-2.5'
                key={item.name}>
                {item.icon}
                <p className='text-neutral-400  font-medium  text-sm underline-animation'>
                  {item.name}
                </p>
              </a>
            ))}
            <div className='flex text-primary cursor-pointer items-center justify-center p-4 rounded-full bg-neutral-600 bg-opacity-30 hover:bg-opacity-70  transition duration-500 ease-in-out'>
              <FontAwesomeIcon icon={faEnvelope} size='2x' />
            </div>
          </div>
        </div>

        {/*  */}
        {/* intro */}
        <div className='max-w-[1400px] flex flex-row gap-8'>
          <div className='flex flex-col items-start justify-center text-white'>
            <h1 className='text-7xl '>
              Hello, I'm <span className='font-bold'>Aman Jat</span>{' '}
            </h1>
            <p className='text-lg font-medium'>
              I am a Full Stack Developer, who loves to code and build things.
            </p>
            <div className='flex flex-row gap-4'>
              <div className='bg-primary py-2 px-8 rounded-lg shadow-lg my-4'>
                <p className='text-lg font-medium'>Full Stack Developer</p>
              </div>
              <div className='cursor-pointer border-primary border-2 text-primary py-2 px-8 rounded-lg shadow-lg my-4 flex flex-row items-center'>
                <p className='text-lg font-medium pr-4'>Download CV</p>
                <FontAwesomeIcon icon={faDownload} size='1x' />
              </div>
            </div>
          </div>
          <div className='py-10'>
            <div
              className={`w-[600px]  rounded-full overflow-hidden border-4 border-white border-opacity-50 shadow-lg`}>
              <Image
                src={aman} // replace with the correct path
                alt='Profile'
                className='grayscale'
              />
            </div>
          </div>
        </div>

        {/* {PROJECTS} */}
        <div className='max-w-[1400px] px-8 w-full flex flex-col items-start'>
          {/* <h1 className='h2 text-white  text-4xl'>Projects</h1> */}
          <div className='grid w-full grid-flow-row  md:grid-cols-1 lg:grid-cols-2 py-4  gap-4'>
            {technologiesGroup.map(group => {
              return (
                <div
                  key={group.title}
                  className='p-8  flex flex-col bg-secondary-200 bg-opacity-5 rounded-lg gap-4 items-start justify-start   '>
                  <h1 className='text-3xl text-white'>{group.title}</h1>
                  <div className='grid grid-flow-row  md:grid-cols-4 lg:grid-cols-4 py-4  gap-4'>
                    {group.technologies.map(tech => {
                      return (
                        <div
                          key={tech.name}
                          className='p-4 w-[120px] h-[160px] flex justify-end flex-col bg-secondary-200 bg-opacity-5 rounded-lg gap-4 items-start    '>
                          <Image
                            src={tech.icon} // replace with the correct path
                            alt='Profile'
                            width={50}
                            height={50}
                          />
                          <h1 className='text-base text-white'>{tech.name}</h1>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className='grid grid-flow-row  md:grid-cols-1 lg:grid-cols-2 py-4  gap-4'>
            {projects.map(project => {
              return (
                <div
                  key={project.id}
                  className='p-8 flex flex-col bg-secondary-200 bg-opacity-5 rounded-lg gap-4 items-start justify-center border-2 shadow-lg border-black border-opacity-20 '>
                  <h1 className='text-3xl text-white'>{project.name}</h1>
                  <Microlink url={project.link} />
                  <p className='text-lg text-neutral-400'>
                    {project.description}
                  </p>
                  <div className='flex flex-row gap-4'>
                    <div className='bg-primary py-2 px-8 rounded-lg shadow-lg '>
                      <p className='text-lg font-medium'>View on Github</p>
                    </div>
                    <div className='cursor-pointer border-primary border-2 text-primary py-2 px-8 rounded-lg shadow-lg  flex flex-row items-center'>
                      <p className='text-lg font-medium'>VISIT</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
