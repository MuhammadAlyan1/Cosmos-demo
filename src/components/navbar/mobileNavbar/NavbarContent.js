import React, { useState } from 'react';
import Learn from './Learn';
import Build from './Build';
import Explore from './Explore';

const NavbarContent = () => {
  const [openedTab, setOpenedTab] = useState('learn');

  return (
    <div className="absolute left-0 right-0 z-20 overflow-x-hidden rounded-b-lg bg-dark md:static">
      <div className="flex gap-6 px-6 py-8">
        <h2
          onClick={() => setOpenedTab('learn')}
          className={`navHeading ${openedTab === 'learn' && 'text-slate-50'} `}
        >
          Learn
        </h2>
        <h2
          onClick={() => setOpenedTab('build')}
          className={`navHeading ${openedTab === 'build' && 'text-slate-50'}`}
        >
          Build
        </h2>
        <h2
          onClick={() => setOpenedTab('explore')}
          className={`navHeading ${openedTab === 'explore' && 'text-slate-50'}`}
        >
          Explore
        </h2>
      </div>

      <div
        className={`${
          openedTab === 'learn'
            ? 'scale-100 opacity-100'
            : 'h-0 scale-0 opacity-0'
        } origin-top-left transition-all duration-150 ease-in`}
      >
        <Learn />
      </div>

      <div
        className={`${
          openedTab === 'build'
            ? 'scale-100 opacity-100'
            : 'h-0 scale-0 opacity-0'
        } origin-top-left transition-all duration-150 ease-in`}
      >
        <Build />
      </div>

      <div
        className={`${
          openedTab === 'explore'
            ? 'scale-100 opacity-100'
            : 'h-0 scale-0 opacity-0'
        } origin-top-left transition-all duration-150 ease-in`}
      >
        <Explore />
      </div>

      {/* {openedTab === 'learn' && <Learn />}
      {openedTab === 'build' && <Build />} */}
      {/* {openedTab === 'explore' && <Explore />} */}
    </div>
  );
};

export default NavbarContent;
