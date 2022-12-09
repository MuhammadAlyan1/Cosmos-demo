import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Community = () => {
  return (
    <section className="bg-black p-4 py-16 text-white xl:flex">
      <div className="sm:max-w-[550px] md:mx-auto md:w-fit md:max-w-[850px]">
        <p className="text-sm font-bold uppercase text-slate-400 md:text-lg">
          Community-owned and operated
        </p>
        <h2 className="text-4xl font-bold sm:py-4 sm:text-5xl md:text-7xl">
          Enter a new universe of connected services.
        </h2>
        <p className="text-slate-300 md:text-2xl">
          Cosmos apps and services connect using IBC, the Inter-Blockchain
          Communication protocol. This innovation enables you to freely exchange
          assets and data across sovereign,
        </p>
        <div className="group relative w-fit pb-4">
          <p className="border-b-[1px] border-dotted text-slate-300 md:text-2xl">
            decentralized blockchains.
          </p>
          <p className="absolute bottom-11 w-[270px] origin-bottom scale-0 rounded-lg bg-white p-4 text-sm text-black transition-transform duration-150 ease-in after:absolute after:-bottom-1 after:left-1/2 after:z-10 after:h-3 after:w-3 after:-translate-x-1/2 after:rotate-[40deg] after:bg-white after:content-[''] group-hover:scale-100">
            Think electronic money without central banks, digital assets trading
            without centrally-operated stock exchanges, or social network
            platforms without central administrators
          </p>
        </div>
        <div className="py-4 sm:flex sm:gap-8">
          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-white p-4 text-center text-lg text-black transition-all duration-150 ease-in hover:gap-3 sm:w-[150px]">
            Learn <HiOutlineArrowNarrowRight />
          </button>

          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-black p-4 text-center text-lg text-white transition-all  duration-150 ease-in hover:gap-3 sm:w-fit">
            Explore tokens <HiOutlineArrowNarrowRight />
          </button>
        </div>
      </div>
      <div className="relative py-4 before:absolute before:top-0 before:right-0 before:h-4 before:w-4 before:border-t-[1px] before:border-r-[1px] before:content-[''] after:absolute after:bottom-0 after:right-0 after:h-4  after:w-4 after:border-b-[1px] after:border-r-[1px] after:content-[''] md:mx-auto md:flex md:max-w-[850px] md:justify-between md:gap-4 md:pr-12 xl:block">
        <div className="mb-8">
          <p className="text-5xl font-bold sm:text-7xl">
            263<span className="text-3xl sm:text-5xl">+</span>
          </p>
          <p className="py-2 text-xs text-slate-200">
            Apps & services, and growing.
          </p>
        </div>
        <div className="xl:mt-28">
          <p className="relative w-fit text-5xl font-bold sm:text-7xl">
            $61B<span className="text-3xl sm:text-5xl">+</span>
            <span className="absolute top-[15px] rotate-90 text-xs font-thin sm:top-[35px]">
              USD
            </span>
          </p>

          <p className="py-2 text-xs text-slate-200">
            Digita assets under management
          </p>
        </div>
      </div>
    </section>
  );
};

export default Community;
