import { futureTechnologies, technologiesGroup } from '@/app/data';
import Image from 'next/image';
import Button from '../../button/Button';

const Skills = () => {
  return (
    <div>
      <h2 className='text-white text-3xl'>Skills</h2>

      {/* Technologies Group */}
      <div className='px-4 xs:px-0 pt-4 grid w-full grid-flow-row  xs:grid-cols-1 lg:grid-cols-5   gap-4'>
        {technologiesGroup.map(group => {
          return (
            <div
              key={group.title}
              className='border-2 border-transparent   flex flex-col  bg-opacity-5 rounded-lg gap-4 items-start justify-start   '>
              <h1 className='uppercase text-xl text-white capita'>
                {group.title}
              </h1>
              <div className='grid xs:grid-cols-2 xs:gap-2 sm:grid-cols-1 w-full '>
                {group.technologies.map(tech => {
                  return (
                    <button
                      key={tech.name}
                      className='xs:px-1 p-2 text-[#ffffff90]  hover:text-[#ffffff] flex flex-row xs:gap-2 sm:gap-6 items-center transition ease-in-out duration-300  hover:bg-secondary-200 hover:bg-opacity-10 rounded-lg '>
                      <Image
                        src={tech.icon} // replace with the correct path
                        alt='Profile'
                        height={25}
                        width={25}
                      />
                      <h1 className='text-base text-left '>{tech.name}</h1>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Future Interest */}
      <div className=' py-4  gap-4'>
        {futureTechnologies.map(group => {
          return (
            <div
              key={group.title}
              className='xs:px-2 sm:p-8  flex xs:flex-col xs:bg-none sm:bg-secondary-200 bg-opacity-5 rounded-lg gap-4 items-start justify-start   '>
              <h1 className='uppercase text-xl text-white capita'>
                {group.title}
              </h1>
              <div className='flex xs:w-full xs:flex-col sm:flex-row gap-4'>
                {group.technologies.map(tech => {
                  return (
                    <Button key={tech.name} variant='soft_filled'>
                      <Image src={tech.icon} alt='Profile' height={25} />
                      <h1 className='text-base text-white'>{tech.name}</h1>
                    </Button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
