import { projects } from '@/app/data';
import Image from 'next/image';
import portfolioScreenshot from '../../../../images/portfolio_screenshot.png';
import Button from '../../button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

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
                flex flex-row xs:flex-col items-strech justify-start gap-8
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
                  <p className='text-base text-neutral-400'>
                    {project.description}
                  </p>
                </div>

                <div className='flex flex-row gap-8'>
                  <div>
                    <p className='text-sm text-neutral-400 '>Role</p>
                    <p className='text-base text-[#ffffffe1]'>{project.role}</p>
                  </div>

                  <div>
                    <p className='text-sm text-neutral-400'>Team Size</p>
                    <p className='text-base text-[#ffffffe1] '>
                      {project.teamSize}
                    </p>
                  </div>
                </div>

                <div>
                  <p className='text-sm text-neutral-400'>
                    Organization (Owner)
                  </p>
                  <p className='text-base text-[#ffffffe1] '>
                    {project.organization}
                  </p>
                </div>

                <div className='flex flex-row gap-4'>
                  <Button variant='filled'>View on Github</Button>
                  <Button
                    variant='soft_filled'
                    endIcon={<FontAwesomeIcon icon={faArrowRightLong} />}>
                    Show more
                  </Button>
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
