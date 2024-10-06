import { projects } from '@/app/data';
import Image from 'next/image';
import portfolioScreenshot from '../../../../images/portfolio_screenshot.png';

const Projects = () => {
  return (
    <div className='w-full'>
      <h2 className='text-white text-3xl'>Projects</h2>
      <div className='py-4 flex flex-col w-full gap-4'>
        {projects.map(project => {
          return (
            <div
              key={project.id}
              className={`
                p-8 
                flex flex-row items-start justify-start gap-8
                border-[1px]
                border-[#ffffff20]
                bg-[#ffffff05]
                bg-opacity-5 
                rounded-md   
                transition ease-in-out duration-300 
                shadow-sm hover:shadow-lg
              `}>
              <Image
                className='rounded-md shadow-lg w-2/5 '
                src={portfolioScreenshot}
                alt='Profile'
              />

              <div className='flex flex-col gap-4 justify-between'>
                <div>
                  <h1 className='text-xl text-[#ffffffe1]'>{project.name}</h1>
                  <p className='text-[16px] text-neutral-400'>
                    {project.description}
                  </p>
                </div>
                <div className='flex flex-row gap-4'>
                  <div className='bg-primary py-2 px-8 rounded-lg shadow-lg '>
                    <p className='text-lg font-medium'>View on Github</p>
                  </div>
                  <div className='cursor-pointer border-primary border-2 text-primary py-2 px-8 rounded-lg shadow-lg  flex flex-row items-center'>
                    <p className='text-lg font-medium'>VISIT</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
