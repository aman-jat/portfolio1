'use client';

import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import './style.css';
import '../styles/index.css';
import Projects from './components/home-sections/projects/Projects';
import Intro from './components/home-sections/Intro/Intro';
import Skills from './components/home-sections/skills/Skills';

export default function App() {
  return (
    <>
      {/* body */}
      <div className='max-w-[1400px] py-8 px-8 flex flex-col items-center justify-center w-full '>
        {/* intro */}
        <Intro />
        <div className='w-full flex flex-col items-start gap-12'>
          <Skills />
          <Projects />
        </div>
      </div>
    </>
  );
}
