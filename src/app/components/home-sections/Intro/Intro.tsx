import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Button from '../../button/Button';
import Image from 'next/image';
import aman from '../../../aman.jpg';

const Intro = () => {
  return (
    <div className=' h-screen flex flex-row items-center justify-between  gap-20'>
      {/* PHOTO - LEFT-SECTION */}
      <div className=''>
        <div
          className={`w-[400px]  rounded-full overflow-hidden  border-opacity-50 shadow-lg`}>
          <Image
            src={aman} // replace with the correct path
            alt='Profile'
          />
        </div>
      </div>

      {/*  RIGHT-SECTION */}
      <div className='flex gap-2 flex-col items-start justify-start text-gray-300'>
        <p className='text-7xl ml-[-6px]'>{`Hello, I'm AMAN JAT`}</p>
        {/* <p className='text-lg font-medium text-gray-200'> */}
        <div className='flex flex-col gap-[2px] my-6'>
          <span>
            Are you looking for someone who can code the front-end, back-end,
            and deploy your website?
          </span>
          <span>
            Someone who writes scalable, readable, and maintainable code?
          </span>
          <span>
            A developer who can optimize performance, ensure seamless user
            experiences, and troubleshoot issues before they become roadblocks?
          </span>

          <span className='mt-4'>
            Look no further! With over 3 years of full-stack development
            experience, I specialize in building solutions that not only work
            but excel under pressure. From crafting beautiful, responsive user
            interfaces to architecting robust, high-performance back-end
            systems, I have a proven track record of delivering end-to-end
            software solutions.
          </span>
        </div>

        <Button variant='filled' size='large'>
          Download CV
          <FontAwesomeIcon icon={faDownload} size='1x' />
        </Button>
      </div>
    </div>
  );
};

export default Intro;
