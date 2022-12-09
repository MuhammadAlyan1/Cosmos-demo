import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Learn = () => {
  return (
    <div className="w-full px-6 md:w-[400px] md:rounded-lg md:bg-dark md:p-8 md:text-white">
      <ul className="md:grid md:grid-cols-2 md:gap-x-16">
        <li className="navElements">
          <a href="#">Introduction</a>
        </li>
        <li className="navElements">
          <a href="#">Features</a>
        </li>
        <li className="navElements">
          <a href="#">What is staking?</a>
        </li>
        <li className="navElements">
          <a href="#">FAQ</a>
        </li>
      </ul>
      <div className="flex items-center gap-4 py-8">
        <div className="basis-3/4">
          <div className="flex items-center gap-2">
            <h3>
              <a href="#">Get ATOM</a>
            </h3>
            <HiOutlineArrowNarrowRight />
          </div>
          <p className="pt-2 text-xs text-slate-400">
            Four simple steps to get ATOM and start earning rewards
          </p>
        </div>

        <div className="z-10 basis-1/4 md:basis-0">
          <svg
            width="100px"
            height="100px"
            data-v-7f4211ff=""
            viewBox="0 0 551 641"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="v-base"
          >
            <path
              data-v-7f4211ff=""
              d="M275.496 481.022L275.496 640.017L550.996 322.028L275.496 481.022Z"
              fill="url(#23-paint0_linear-127634)"
            ></path>{' '}
            <path
              data-v-7f4211ff=""
              d="M275.5 481.022L275.5 640.017L0 322.028L275.5 481.022Z"
              fill="url(#23-paint1_linear-127634)"
            ></path>{' '}
            <rect
              data-v-7f4211ff=""
              width="318.088"
              height="318.087"
              transform="matrix(0.866114 -0.499847 0.866114 0.499847 0 322.028)"
              fill="url(#23-paint2_radial-127634)"
            ></rect>{' '}
            <path
              data-v-7f4211ff=""
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M389.834 387.887C452.978 351.461 452.978 292.402 389.834 255.976C326.689 219.55 224.313 219.55 161.169 255.976C98.0382 292.395 98.0245 351.435 161.128 387.863L161.139 387.87L161.173 387.889L161.199 387.904C224.346 424.313 326.7 424.307 389.834 387.887Z"
              fill="url(#23-paint3_linear-127634)"
            ></path>{' '}
            <defs data-v-7f4211ff="">
              <linearGradient
                data-v-7f4211ff=""
                id="23-paint0_linear-127634"
                x1="389.562"
                y1="409.884"
                x2="447.934"
                y2="557.139"
                gradientUnits="userSpaceOnUse"
              >
                <stop data-v-7f4211ff="" stop-color="#71A1FF"></stop>{' '}
                <stop data-v-7f4211ff="" offset="1" stop-color="#DA17C6"></stop>
              </linearGradient>{' '}
              <linearGradient
                data-v-7f4211ff=""
                id="23-paint1_linear-127634"
                x1="164.087"
                y1="417.843"
                x2="103.062"
                y2="557.139"
                gradientUnits="userSpaceOnUse"
              >
                <stop data-v-7f4211ff="" stop-color="#93B7FF"></stop>{' '}
                <stop data-v-7f4211ff="" offset="1" stop-color="#DA17C6"></stop>
              </linearGradient>{' '}
              <radialGradient
                data-v-7f4211ff=""
                id="23-paint2_radial-127634"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(101.265 216.245) rotate(-44.9244) scale(309.458 347.373)"
              >
                <stop data-v-7f4211ff="" stop-color="#C1CDF6"></stop>{' '}
                <stop data-v-7f4211ff="" offset="1" stop-color="#8DA6FF"></stop>
              </radialGradient>{' '}
              <linearGradient
                data-v-7f4211ff=""
                id="23-paint3_linear-127634"
                x1="264.911"
                y1="416.517"
                x2="267.565"
                y2="287.834"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  data-v-7f4211ff=""
                  stop-color="white"
                  stop-opacity="0.4"
                ></stop>{' '}
                <stop
                  data-v-7f4211ff=""
                  offset="1"
                  stop-color="white"
                  stop-opacity="0.05"
                ></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Learn;
