'use client';

import {
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import Image from 'next/image';
import aman from './aman.jpg';
import './style.css';
import '../styles/index.css';
import '/node_modules/augmented-ui/augmented-ui.min.css';
import html from '../images/html.png';
import css from '../images/css.png';
import react from '../images/react.png';
import node from '../images/node.png';
import express from '../images/express.png';
import mongodb from '../images/mongodb.png';
import postgres from '../images/postgres.png';

const BG_COLOR = '#c3ac001a';
const BORDER_COLOR = '#c3ac0032';

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

  const Border = () => {
    return (
      <div className='border-t-[1px] rounded-full opacity-30 border-[#ffffff90] w-full'></div>
    );
  };

  const options = [
    {
      title: 'INTRODUCTION',
    },
    {
      title: 'PROJECTS',
    },
    {
      title: 'TECHNOLOGIES',
    },
    {
      title: 'CONTRACT',
    },
  ];

  const items = [
    {
      element: (
        <div>
          <Image alt='html' src={html} />
        </div>
      ),
    },

    {
      element: (
        <div>
          <Image alt='' src={css} />
        </div>
      ),
    },
    {
      element: (
        <div>
          <Image alt='' src={react} />
        </div>
      ),
    },
    {
      element: (
        <div>
          <Image alt='' src={node} />
        </div>
      ),
    },
    {
      element: (
        <div>
          <Image alt='' src={express} />
        </div>
      ),
    },
    {
      element: (
        <div>
          <Image alt='' src={mongodb} />
        </div>
      ),
    },
    {
      element: (
        <div>
          <Image alt='' src={postgres} />
        </div>
      ),
    },
  ];

  const CircleComponent = ({ items: ITEMS, outerRadius, innerRadius }) => {
    const items = [...ITEMS, ...ITEMS];
    const innerCircleCount = items.length;
    const innerCircles = [];
    const angleStep = (2 * Math.PI) / innerCircleCount;

    for (let i = 0; i < innerCircleCount; i++) {
      const angle = i * angleStep;
      const x = outerRadius + outerRadius * Math.cos(angle);
      const y = outerRadius + outerRadius * Math.sin(angle);

      innerCircles.push(
        <div
          key={i}
          className='p-4 absolute border-[2px]  rounded-full fixed-element'
          style={{
            backgroundColor: '#332d00',
            borderColor: BORDER_COLOR,
            width: `${innerRadius * 2}px`,
            height: `${innerRadius * 2}px`,
            left: `${x - innerRadius}px`,
            top: `${y - innerRadius}px`,
          }}>
          {items[i].element}
        </div>
      );
    }

    return (
      <div
        className='rotating-circle relative border-[2px] border-white border-opacity-20 rounded-full'
        style={{
          width: `${outerRadius * 2}px`,
          height: `${outerRadius * 2}px`,
          margin: `${innerRadius}px`,
        }}>
        {innerCircles}
      </div>
    );
  };

  return (
    <div className='h-screen bg-dark-gray-gradient py-8  flex items-center w-full '>
      <div className='left-section'>
        <div
          id='aug-1'
          data-secret='JF2CO4ZAO5UGC5BAORUGKICJNRWHK3LJNZQXI2JAO5QW45DFMQQGC3DMEBQWY33OM4XCASSKGJMEONKCIFHE4VKXJFNEISSOLJKFGNCJINLE4WSXI5FTIM2UIZMVQQZUKBMT2==='
          data-augmented-ui=''>
          <div className='profile-picture-section'>
            <Image
              src={aman} // replace with the correct path
              alt='Profile'
              className='grayscale'
            />

            <div className='flex flex-col items-start justify-start py-2 gap-2'>
              <div className='flex flex-row justify-between w-full '>
                <p>AMAN, 26</p>
                <p>INDIA</p>
              </div>

              <p className='text-[18px]'>SOFTWARE ENGINNER</p>
            </div>
          </div>
        </div>

        <Border />

        <div className='border-[1px] border-t-[6px] rounded-sm p-2 opacity-90 border-[#ffffff30] w-full flex flex-col gap-4 '>
          {options.map(option => {
            return (
              <div key={option.title} className='option'>
                <div
                  id='aug'
                  data-secret='JF2CO4ZAO5UGC5BAORUGKICJNRWHK3LJNZQXI2JAO5QW45DFMQQGC3DMEBQWY33OM4XCASSKGJMEONKCIFHE4VKXJFNEISSOLJKFGNCJINLE4WSXI5FTIM2UIZMVQQZUKBMT2==='
                  data-augmented-ui=''>
                  <div className='flex flex-row  gap-2 items-stretch'>
                    <div className='w-[10px]  bg-[#ffffff50]  border-t-2 border-b-2' />
                    <p>{option.title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div>
        <div className='bg-red-100 h-screen '>
          <div
            style={{
              position: 'absolute',
              right: '-800px',
              top: '-75px',
            }}>
            <CircleComponent items={items} outerRadius={450} innerRadius={40} />
          </div>
        </div>
      </div>
    </div>
  );
}
