import { navItems } from '@/app/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const socialMediaLink = [
    // {
    //   id: 1,
    //   name: 'Twitter',
    //   to: 'https://www.facebook.com',
    //   icon: <FontAwesomeIcon icon={faTwitter} size='1x' />,
    // },
    {
      id: 2,
      name: 'LinkedIN',
      to: 'https://www.linkedin.com/in/amanjat/',
      icon: <FontAwesomeIcon icon={faLinkedin} size='1x' />,
    },
    {
      id: 3,
      name: 'Github',
      to: 'https://github.com/aman-jat',
      icon: <FontAwesomeIcon icon={faGithub} size='1x' />,
    },
  ];

  return (
    <>
      <div className='fixed backdrop-blur-md bg-[#00000050]  px-4 py-4 flex w-full items-center justify-center '>
        <div className='max-w-[1400px] xs:px-4 w-full flex items-center justify-between '>
          <div className='text-white flex gap-8 flex-row items-center'>
            <p className='text-2xl'>
              <b> AMAN </b>JAT
            </p>

            <ul className='flex xs:hidden  text-white gap-4'>
              {navItems.map(item => (
                <li key={item.name} className=''>
                  <a
                    href={item.to}
                    className='text-base underline-animation uppercase'>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex xs:hidden text-white gap-6'>
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
            <div className='flex text-primary cursor-pointer items-center justify-center p-3 rounded-full bg-neutral-600 bg-opacity-30 hover:bg-opacity-70  transition duration-500 ease-in-out'>
              <FontAwesomeIcon icon={faEnvelope} size='1x' />
            </div>
          </div>
        </div>
      </div>
      <div className='h-[120px]'></div>
    </>
  );
};

export default Header;
