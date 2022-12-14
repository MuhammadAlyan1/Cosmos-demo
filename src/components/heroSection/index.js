import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative isolate overflow-hidden bg-black bg-heroColors bg-cover bg-no-repeat lg:h-[1300px]">
      <div className="relative isolate">
        <p className="pt-16 text-center text-xs font-bold uppercase text-slate-400 md:text-base">
          Welcome to Cosmos
        </p>
        <h1 className="z-50 mx-auto w-fit bg-gradient-to-tr from-pink-900 via-slate-200 to-white bg-clip-text py-8 text-center text-4xl font-bold text-transparent sm:text-5xl md:text-8xl lg:text-9xl">
          The Internet of <br />
          Blockchains.
        </h1>
        <p className="mx-auto px-12 text-center text-slate-300 md:max-w-[850px] md:text-2xl">
          Cosmos is an ever-expanding ecosystem of interconnected apps and
          services, built for a decentralized future.
        </p>

        {/* Thorchain */}
        <div class="group absolute top-[50%] right-[-5%] z-[-10] w-[100px] pt-10 transition-all duration-200 ease-in hover:scale-105 sm:w-[150px] md:right-[0] lg:right-[10%] lg:w-[250px]">
          <p class="relative isolate mx-auto mb-3 w-fit translate-y-10 rounded-lg bg-white p-2 text-xs text-black opacity-0 transition-all duration-150 ease-in after:absolute after:left-1/2 after:top-6 after:-z-10 after:h-3 after:w-3 after:-translate-x-1/2 after:rotate-[45deg] after:bg-white after:content-[''] group-hover:translate-y-0 group-hover:opacity-100">
            THORChain
          </p>
          <svg
            data-v-91efa64a=""
            viewBox="0 0 230 230"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g data-v-91efa64a="" filter="url(#filter0_ii-287550)">
              <path
                data-v-91efa64a=""
                d="M2.93429 93.2972C-8.79566 155.445 32.0761 215.335 94.2239 227.065C156.372 238.795 216.262 197.923 227.991 135.775C239.721 73.6273 198.85 13.7375 136.702 2.00754C74.554 -9.72242 14.6642 31.1493 2.93429 93.2972Z"
                fill="url(#paint0_radial-383420)"
              ></path>
            </g>
            <path
              data-v-91efa64a=""
              d="M88.7438 136.215L124.952 125.105L115.086 112.844L88.7438 136.215ZM105.235 100.603L115.103 112.846L137.153 90.8577L105.235 100.603Z"
              fill="url(#paint1_linear-496665)"
            ></path>
            <defs data-v-91efa64a="">
              <filter
                data-v-91efa64a=""
                id="filter0_ii-287550"
                x="-14.0732"
                y="0"
                width="244.072"
                height="238.072"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  data-v-91efa64a=""
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feBlend
                  data-v-91efa64a=""
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feColorMatrix
                  data-v-91efa64a=""
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feOffset data-v-91efa64a=""></feOffset>
                <feGaussianBlur
                  data-v-91efa64a=""
                  stdDeviation="13.5"
                ></feGaussianBlur>
                <feComposite
                  data-v-91efa64a=""
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                ></feComposite>
                <feColorMatrix
                  data-v-91efa64a=""
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.566083 0 0 0 0 0.470833 0 0 0 0.16 0"
                ></feColorMatrix>
                <feBlend
                  data-v-91efa64a=""
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow"
                ></feBlend>
                <feColorMatrix
                  data-v-91efa64a=""
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feOffset data-v-91efa64a="" dx="-15" dy="9"></feOffset>
                <feGaussianBlur
                  data-v-91efa64a=""
                  stdDeviation="12"
                ></feGaussianBlur>
                <feComposite
                  data-v-91efa64a=""
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                ></feComposite>
                <feColorMatrix
                  data-v-91efa64a=""
                  type="matrix"
                  values="0 0 0 0 0.666667 0 0 0 0 0.317647 0 0 0 0 0.176471 0 0 0 0.24 0"
                ></feColorMatrix>
                <feBlend
                  data-v-91efa64a=""
                  mode="normal"
                  in2="effect1_innerShadow"
                  result="effect2_innerShadow"
                ></feBlend>
              </filter>
              <radialGradient
                data-v-91efa64a=""
                id="paint0_radial-383420"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(164.015 61.7966) rotate(132.296) scale(211.583)"
              >
                <stop
                  data-v-91efa64a=""
                  offset="0.59537"
                  stop-color="#111111"
                ></stop>
                <stop
                  data-v-91efa64a=""
                  offset="0.895026"
                  stop-color="#433649"
                ></stop>
              </radialGradient>
              <linearGradient
                data-v-91efa64a=""
                id="paint1_linear-496665"
                x1="136.999"
                y1="92.002"
                x2="88.999"
                y2="141.002"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  data-v-91efa64a=""
                  stop-color="#14FFB9"
                  stop-opacity="0.26"
                ></stop>
                <stop
                  data-v-91efa64a=""
                  offset="1"
                  stop-color="#007955"
                  stop-opacity="0"
                ></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="z-[-10] w-full">
        <svg
          // width="4041"
          // height="1473"
          width="1920"
          height="900"
          viewBox="0 0 1416 884"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            data-v-91efa64a=""
            d="M388.172 726.574L664.172 717.574"
            stroke="url(#paint0_linear-920361)"
            stroke-width="2.5"
            stroke-linecap="round"
          ></path>{' '}
          <path
            data-v-91efa64a=""
            d="M466.172 731.574L744.172 723.574"
            stroke="url(#paint1_linear-357857)"
            stroke-width="2.5"
            stroke-linecap="round"
          ></path>{' '}
          <path
            data-v-91efa64a=""
            d="M768.171 719.576L950.171 882.576"
            stroke="url(#paint2_linear-022540)"
            stroke-width="2.5"
            stroke-linecap="round"
          ></path>{' '}
          <g data-v-91efa64a="" filter="url(#filter0_i-995627)">
            <path
              data-v-91efa64a=""
              d="M116.815 260.068C139.419 237.382 139.352 200.668 116.666 178.064C93.9803 155.461 57.2659 155.528 34.6623 178.213C12.0587 200.899 12.1254 237.614 34.8113 260.217C57.4972 282.821 94.2115 282.754 116.815 260.068Z"
              fill="url(#paint3_radial-206320)"
            ></path>
          </g>{' '}
          <g data-v-91efa64a="" filter="url(#filter1_f-951862)">
            <path
              data-v-91efa64a=""
              d="M167.995 770.551C187.469 761.629 196.023 738.61 187.101 719.136C178.179 699.662 155.16 691.108 135.686 700.03C116.212 708.952 107.658 731.971 116.58 751.445C125.502 770.919 148.521 779.473 167.995 770.551Z"
              fill="url(#paint4_radial-736369)"
            ></path>
          </g>{' '}
          <g data-v-91efa64a="" filter="url(#filter2_f-905631)">
            <path
              data-v-91efa64a=""
              d="M362.933 496.787C383.285 490.106 394.367 468.192 387.687 447.84C381.006 427.488 359.092 416.405 338.74 423.086C318.388 429.766 307.305 451.68 313.986 472.032C320.666 492.384 342.581 503.467 362.933 496.787Z"
              fill="url(#paint5_radial-645719)"
            ></path>
          </g>{' '}
          <g data-v-91efa64a="" filter="url(#filter3_f-036787)">
            <path
              data-v-91efa64a=""
              d="M1345.2 785.39C1326.02 797.428 1320.23 822.734 1332.27 841.913C1344.31 861.092 1369.61 866.881 1388.79 854.843C1407.97 842.805 1413.76 817.499 1401.72 798.32C1389.68 779.142 1364.38 773.353 1345.2 785.39Z"
              fill="url(#paint6_radial-043522)"
            ></path>
          </g>{' '}
          <g data-v-91efa64a="" filter="url(#filter4_i-493550)">
            <path
              data-v-91efa64a=""
              d="M989.121 595.707C964.342 612.303 957.708 645.844 974.304 670.623C990.9 695.403 1024.44 702.037 1049.22 685.441C1074 668.845 1080.63 635.304 1064.04 610.524C1047.44 585.745 1013.9 579.111 989.121 595.707Z"
              fill="url(#paint7_radial-957737)"
            ></path>
          </g>{' '}
          <g data-v-91efa64a="" filter="url(#filter5_if-507038)">
            <path
              data-v-91efa64a=""
              d="M644.139 759.798C626.203 770.696 620.497 794.07 631.395 812.005C642.292 829.941 665.666 835.647 683.602 824.749C701.538 813.852 707.243 790.478 696.346 772.542C685.448 754.607 662.075 748.901 644.139 759.798Z"
              fill="url(#paint8_radial-112305)"
            ></path>
          </g>{' '}
          <path
            data-v-91efa64a=""
            d="M1253.61 135.827C1289.22 130.952 1314.14 98.1304 1309.26 62.519C1304.38 26.9077 1271.56 1.99151 1235.95 6.86716C1200.34 11.7428 1175.42 44.564 1180.3 80.1753C1185.18 115.787 1218 140.703 1253.61 135.827Z"
            fill="url(#paint9_radial-887425)"
          ></path>{' '}
          <g data-v-91efa64a="" filter="url(#filter6_f-458304)">
            <path
              data-v-91efa64a=""
              d="M1339.24 184.943C1350.94 189.975 1364.51 184.571 1369.54 172.871C1374.57 161.172 1369.17 147.608 1357.47 142.576C1345.77 137.544 1332.2 142.949 1327.17 154.648C1322.14 166.348 1327.55 179.911 1339.24 184.943Z"
              fill="url(#paint10_radial-169665)"
            ></path>
          </g>{' '}
          <path
            data-v-91efa64a=""
            d="M279.264 99.5717C300.987 124.77 339.024 127.588 364.222 105.866C389.42 84.1431 392.238 46.1063 370.516 20.9079C348.794 -4.29053 310.757 -7.10839 285.558 14.614C260.36 36.3364 257.542 74.3732 279.264 99.5717Z"
            fill="url(#paint11_radial-046904)"
          ></path>{' '}
          <defs data-v-91efa64a="">
            <filter
              data-v-91efa64a=""
              id="filter0_i-995627"
              x="17.7529"
              y="161.156"
              width="115.971"
              height="115.971"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood
                data-v-91efa64a=""
                flood-opacity="0"
                result="BackgroundImageFix"
              ></feFlood>{' '}
              <feBlend
                data-v-91efa64a=""
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>{' '}
              <feColorMatrix
                data-v-91efa64a=""
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>{' '}
              <feOffset data-v-91efa64a=""></feOffset>{' '}
              <feGaussianBlur
                data-v-91efa64a=""
                stdDeviation="10"
              ></feGaussianBlur>{' '}
              <feComposite
                data-v-91efa64a=""
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              ></feComposite>{' '}
              <feColorMatrix
                data-v-91efa64a=""
                type="matrix"
                values="0 0 0 0 0.304167 0 0 0 0 0.706576 0 0 0 0 1 0 0 0 0.25 0"
              ></feColorMatrix>{' '}
              <feBlend
                data-v-91efa64a=""
                mode="normal"
                in2="shape"
                result="effect1_innerShadow"
              ></feBlend>
            </filter>{' '}
            <filter
              data-v-91efa64a=""
              id="filter1_f-951862"
              x="105.046"
              y="688.496"
              width="93.5888"
              height="93.5888"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood
                data-v-91efa64a=""
                flood-opacity="0"
                result="BackgroundImageFix"
              ></feFlood>{' '}
              <feBlend
                data-v-91efa64a=""
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>{' '}
              <feGaussianBlur
                data-v-91efa64a=""
                stdDeviation="4"
                result="effect1_foregroundBlur"
              ></feGaussianBlur>
            </filter>{' '}
            <filter
              data-v-91efa64a=""
              id="filter2_f-905631"
              x="308.041"
              y="417.141"
              width="85.5909"
              height="85.5909"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood
                data-v-91efa64a=""
                flood-opacity="0"
                result="BackgroundImageFix"
              ></feFlood>{' '}
              <feBlend
                data-v-91efa64a=""
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>{' '}
              <feGaussianBlur
                data-v-91efa64a=""
                stdDeviation="2"
                result="effect1_foregroundBlur"
              ></feGaussianBlur>
            </filter>{' '}
            <filter
              data-v-91efa64a=""
              id="filter3_f-036787"
              x="1317.99"
              y="771.111"
              width="98.0108"
              height="98.0108"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood
                data-v-91efa64a=""
                flood-opacity="0"
                result="BackgroundImageFix"
              ></feFlood>{' '}
              <feBlend
                data-v-91efa64a=""
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>{' '}
              <feGaussianBlur
                data-v-91efa64a=""
                stdDeviation="4"
                result="effect1_foregroundBlur"
              ></feGaussianBlur>
            </filter>{' '}
            <filter
              data-v-91efa64a=""
              id="filter4_i-493550"
              x="965.165"
              y="586.568"
              width="108.011"
              height="108.011"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood
                data-v-91efa64a=""
                flood-opacity="0"
                result="BackgroundImageFix"
              ></feFlood>{' '}
              <feBlend
                data-v-91efa64a=""
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>{' '}
              <feColorMatrix
                data-v-91efa64a=""
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>{' '}
              <feOffset data-v-91efa64a=""></feOffset>{' '}
              <feGaussianBlur
                data-v-91efa64a=""
                stdDeviation="10"
              ></feGaussianBlur>{' '}
              <feComposite
                data-v-91efa64a=""
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              ></feComposite>{' '}
              <feColorMatrix
                data-v-91efa64a=""
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 0.451667 0 0 0 0 0.416667 0 0 0 0.41 0"
              ></feColorMatrix>{' '}
              <feBlend
                data-v-91efa64a=""
                mode="normal"
                in2="shape"
                result="effect1_innerShadow"
              ></feBlend>
            </filter>{' '}
            <filter
              data-v-91efa64a=""
              id="filter5_if-507038"
              x="621.865"
              y="745.268"
              width="89.011"
              height="89.011"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood
                data-v-91efa64a=""
                flood-opacity="0"
                result="BackgroundImageFix"
              ></feFlood>{' '}
              <feBlend
                data-v-91efa64a=""
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>{' '}
              <feColorMatrix
                data-v-91efa64a=""
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>{' '}
              <feOffset data-v-91efa64a="" dx="9" dy="-9"></feOffset>{' '}
              <feGaussianBlur
                data-v-91efa64a=""
                stdDeviation="7"
              ></feGaussianBlur>{' '}
              <feComposite
                data-v-91efa64a=""
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              ></feComposite>{' '}
              <feColorMatrix
                data-v-91efa64a=""
                type="matrix"
                values="0 0 0 0 0.649181 0 0 0 0 0.455382 0 0 0 0 0.895833 0 0 0 1 0"
              ></feColorMatrix>{' '}
              <feBlend
                data-v-91efa64a=""
                mode="normal"
                in2="shape"
                result="effect1_innerShadow"
              ></feBlend>{' '}
              <feGaussianBlur
                data-v-91efa64a=""
                stdDeviation="2"
                result="effect2_foregroundBlur"
              ></feGaussianBlur>
            </filter>{' '}
            <filter
              data-v-91efa64a=""
              id="filter6_f-458304"
              x="1321.29"
              y="136.693"
              width="54.132"
              height="54.132"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood
                data-v-91efa64a=""
                flood-opacity="0"
                result="BackgroundImageFix"
              ></feFlood>{' '}
              <feBlend
                data-v-91efa64a=""
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>{' '}
              <feGaussianBlur
                data-v-91efa64a=""
                stdDeviation="2"
                result="effect1_foregroundBlur"
              ></feGaussianBlur>
            </filter>{' '}
            <linearGradient
              data-v-91efa64a=""
              id="paint0_linear-920361"
              x1="663.984"
              y1="717.549"
              x2="654.971"
              y2="771.287"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                data-v-91efa64a=""
                offset="0.190577"
                stop-color="#EDBAFF"
              ></stop>{' '}
              <stop
                data-v-91efa64a=""
                offset="0.427388"
                stop-color="#D8AFF9"
                stop-opacity="0"
              ></stop>
            </linearGradient>{' '}
            <linearGradient
              data-v-91efa64a=""
              id="paint1_linear-357857"
              x1="466.296"
              y1="731.576"
              x2="466.736"
              y2="715.826"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                data-v-91efa64a=""
                offset="0.190577"
                stop-color="#BAFBFF"
              ></stop>{' '}
              <stop
                data-v-91efa64a=""
                offset="0.427388"
                stop-color="#AFD4F9"
                stop-opacity="0"
              ></stop>
            </linearGradient>{' '}
            <linearGradient
              data-v-91efa64a=""
              id="paint2_linear-022540"
              x1="950.089"
              y1="882.61"
              x2="791.115"
              y2="699.428"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                data-v-91efa64a=""
                offset="0.190577"
                stop-color="#BAFBFF"
              ></stop>{' '}
              <stop
                data-v-91efa64a=""
                offset="0.427388"
                stop-color="#AFD4F9"
                stop-opacity="0"
              ></stop>
            </linearGradient>{' '}
            <radialGradient
              data-v-91efa64a=""
              id="paint3_radial-206320"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(81.119 121.414) rotate(92.329) scale(192.189)"
            >
              <stop
                data-v-91efa64a=""
                offset="0.473925"
                stop-color="#0C0C0C"
              ></stop>{' '}
              <stop
                data-v-91efa64a=""
                offset="0.890625"
                stop-color="#2F3A55"
              ></stop>
            </radialGradient>{' '}
            <radialGradient
              data-v-91efa64a=""
              id="paint4_radial-736369"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(117.833 802.857) rotate(-62.68) scale(121.455)"
            >
              <stop
                data-v-91efa64a=""
                offset="0.473925"
                stop-color="#130F1A"
              ></stop>{' '}
              <stop
                data-v-91efa64a=""
                offset="0.823158"
                stop-color="#3B2A5E"
              ></stop>{' '}
              <stop
                data-v-91efa64a=""
                offset="0.991368"
                stop-color="#8543B1"
              ></stop>
            </radialGradient>{' '}
            <radialGradient
              data-v-91efa64a=""
              id="paint5_radial-645719"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(296.565 439.562) rotate(26.6875) scale(104.648)"
            >
              <stop
                data-v-91efa64a=""
                offset="0.473925"
                stop-color="#190F2E"
              ></stop>{' '}
              <stop
                data-v-91efa64a=""
                offset="0.945943"
                stop-color="#7D4087"
              ></stop>
            </radialGradient>{' '}
            <radialGradient
              data-v-91efa64a=""
              id="paint6_radial-043522"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(1408.17 827.574) rotate(-171.644) scale(89.4512)"
            >
              <stop data-v-91efa64a="" stop-color="#AB432C"></stop>{' '}
              <stop
                data-v-91efa64a=""
                offset="0.609037"
                stop-color="#460615"
              ></stop>{' '}
              <stop
                data-v-91efa64a=""
                offset="0.866261"
                stop-color="#543871"
              ></stop>
            </radialGradient>{' '}
            <radialGradient
              data-v-91efa64a=""
              id="paint7_radial-957737"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(1033.27 627.227) rotate(150.815) scale(86.4523 93.1025)"
            >
              <stop data-v-91efa64a="" stop-color="#200F31"></stop>{' '}
              <stop
                data-v-91efa64a=""
                offset="0.837244"
                stop-color="#82118C"
              ></stop>
            </radialGradient>{' '}
            <radialGradient
              data-v-91efa64a=""
              id="paint8_radial-112305"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(653.861 798.968) rotate(-25.7712) scale(52.4976)"
            >
              <stop data-v-91efa64a="" stop-color="#77099E"></stop>{' '}
              <stop
                data-v-91efa64a=""
                offset="0.697917"
                stop-color="#6B2DAA"
              ></stop>{' '}
              <stop data-v-91efa64a="" offset="1" stop-color="#6CE8FF"></stop>
            </radialGradient>{' '}
            <radialGradient
              data-v-91efa64a=""
              id="paint9_radial-887425"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(1233.17 18.0742) rotate(105.784) scale(194.847)"
            >
              <stop
                data-v-91efa64a=""
                offset="0.473925"
                stop-color="#111111"
              ></stop>{' '}
              <stop data-v-91efa64a="" offset="1" stop-color="#A24F2C"></stop>
            </radialGradient>{' '}
            <radialGradient
              data-v-91efa64a=""
              id="paint10_radial-169665"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(1354.67 149.075) rotate(123.341) scale(45.4863)"
            >
              <stop
                data-v-91efa64a=""
                offset="0.473925"
                stop-color="#111111"
              ></stop>{' '}
              <stop
                data-v-91efa64a=""
                offset="0.866261"
                stop-color="#473120"
              ></stop>{' '}
              <stop data-v-91efa64a="" offset="1" stop-color="#B35825"></stop>
            </radialGradient>{' '}
            <radialGradient
              data-v-91efa64a=""
              id="paint11_radial-046904"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(356.561 11.0999) rotate(110.715) scale(127.684)"
            >
              <stop
                data-v-91efa64a=""
                offset="0.473925"
                stop-color="#111111"
              ></stop>{' '}
              <stop
                data-v-91efa64a=""
                offset="0.866261"
                stop-color="#1F2737"
              ></stop>
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Binance */}
      <div class="group absolute top-[25%] right-[10%] w-[100px] pt-10 transition-all duration-200 ease-in hover:scale-105 sm:top-[30%] sm:w-[150px] lg:right-[25%] lg:top-[50%] lg:w-[250px]">
        <p class="relative isolate mx-auto mb-3 w-fit translate-y-10 rounded-lg bg-white p-2 text-xs text-black opacity-0 transition-all duration-150 ease-in after:absolute after:left-1/2 after:top-6 after:-z-10 after:h-3 after:w-3 after:-translate-x-1/2 after:rotate-[45deg] after:bg-white after:content-[''] group-hover:translate-y-0 group-hover:opacity-100">
          Binance
        </p>
        <svg
          data-v-91efa64a=""
          viewBox="0 0 225 225"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g data-v-91efa64a="" filter="url(#filter0_i-567027)">
            <path
              data-v-91efa64a=""
              d="M26.9131 39.6163C67.167 -7.65172 138.117 -13.3378 185.385 26.916C232.653 67.1699 238.34 138.12 198.086 185.388C157.832 232.656 86.8814 238.343 39.6134 198.089C-7.65465 157.835 -13.3407 86.8843 26.9131 39.6163Z"
              fill="url(#paint0_radial-656264)"
            ></path>
          </g>
          <path
            data-v-91efa64a=""
            d="M124.61 111.77L118.997 96.6159L103.835 102.231L100.569 93.4129L124.55 84.5312L133.428 108.504L124.61 111.77ZM139 123.548L135.734 114.73L126.916 117.996L130.182 126.814L139 123.548ZM120.689 120.303L105.535 125.915L99.9194 110.753L91.0996 114.014L91.101 114.019L99.982 138L123.967 129.117L120.689 120.303ZM97.6139 104.536L94.3481 95.7176L85.5303 98.9833L88.7961 107.802L97.6139 104.536Z"
            fill="url(#paint1_linear-214008)"
          ></path>
          <path
            data-v-91efa64a=""
            d="M106.139 108.446L106.137 108.445L115.085 105.131L118.396 114.071L118.4 114.084L118.388 114.089L109.448 117.4L106.134 108.452L106.133 108.447L106.139 108.446Z"
            fill="url(#paint2_linear-587121)"
          ></path>
          <defs data-v-91efa64a="">
            <filter
              data-v-91efa64a=""
              id="filter0_i-567027"
              x="0.0810547"
              y="0.0839844"
              width="224.837"
              height="224.837"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood
                data-v-91efa64a=""
                flood-opacity="0"
                result="BackgroundImageFix"
              ></feFlood>
              <feBlend
                data-v-91efa64a=""
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feColorMatrix
                data-v-91efa64a=""
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>
              <feOffset data-v-91efa64a=""></feOffset>
              <feGaussianBlur
                data-v-91efa64a=""
                stdDeviation="16.5"
              ></feGaussianBlur>
              <feComposite
                data-v-91efa64a=""
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              ></feComposite>
              <feColorMatrix
                data-v-91efa64a=""
                type="matrix"
                values="0 0 0 0 0.844 0 0 0 0 0.5125 0 0 0 0 1 0 0 0 0.56 0"
              ></feColorMatrix>
              <feBlend
                data-v-91efa64a=""
                mode="normal"
                in2="shape"
                result="effect1_innerShadow"
              ></feBlend>
            </filter>
            <radialGradient
              data-v-91efa64a=""
              id="paint0_radial-656264"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(186 174) rotate(-141.44) scale(241.271 214.882)"
            >
              <stop data-v-91efa64a="" stop-color="#45122B"></stop>
              <stop
                data-v-91efa64a=""
                offset="0.692708"
                stop-color="#1B1200"
              ></stop>
              <stop
                data-v-91efa64a=""
                offset="0.880208"
                stop-color="#FFE7D1"
              ></stop>
            </radialGradient>
            <linearGradient
              data-v-91efa64a=""
              id="paint1_linear-214008"
              x1="86.2962"
              y1="98.0714"
              x2="138.945"
              y2="127.493"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                data-v-91efa64a=""
                offset="0.273858"
                stop-color="#C69C4A"
                stop-opacity="0.28"
              ></stop>
              <stop
                data-v-91efa64a=""
                offset="1"
                stop-color="#FF6B00"
                stop-opacity="0"
              ></stop>
            </linearGradient>
            <linearGradient
              data-v-91efa64a=""
              id="paint2_linear-587121"
              x1="86.2962"
              y1="98.0714"
              x2="138.945"
              y2="127.493"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                data-v-91efa64a=""
                offset="0.273858"
                stop-color="#C69C4A"
                stop-opacity="0.28"
              ></stop>
              <stop
                data-v-91efa64a=""
                offset="1"
                stop-color="#FF6B00"
                stop-opacity="0"
              ></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Ethereum */}
      <div class="group absolute top-[25%] left-[2%] w-[100px] pt-10 transition-all duration-200 ease-in hover:scale-105 sm:top-[32%] sm:w-[150px] md:top-[40%] lg:top-[55%] lg:w-[250px]">
        <p class="relative isolate mx-auto mb-3 w-fit translate-y-10 rounded-lg bg-white p-2 text-xs text-black opacity-0 transition-all duration-150 ease-in after:absolute after:left-1/2 after:top-6 after:-z-10 after:h-3 after:w-3 after:-translate-x-1/2 after:rotate-[45deg] after:bg-white after:content-[''] group-hover:translate-y-0 group-hover:opacity-100">
          Ethereum
        </p>
        <svg
          data-v-91efa64a=""
          viewBox="0 0 168 168"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g data-v-91efa64a="" filter="url(#filter0_i-477343)">
            <path
              data-v-91efa64a=""
              d="M27.2155 145.899C-6.97015 114.537 -9.25984 61.4012 22.1014 27.2155C53.4625 -6.97014 106.599 -9.25984 140.784 22.1014C174.97 53.4625 177.26 106.599 145.899 140.784C114.537 174.97 61.4012 177.26 27.2155 145.899Z"
              fill="url(#paint0_radial-275648)"
            ></path>
          </g>
          <g data-v-91efa64a="" opacity="0.1">
            <path
              data-v-91efa64a=""
              d="M77.9753 60.318L77.9466 61.4987L86.4562 93.257L86.8643 93.4921L99.2712 80.8282L77.9753 60.318Z"
              fill="white"
              fill-opacity="0.68"
            ></path>
            <path
              data-v-91efa64a=""
              d="M77.9752 60.3175L69.7875 88.7278L86.8642 93.4917L82.7339 78.0772L77.9752 60.3175Z"
              fill="white"
              fill-opacity="0.333"
            ></path>
            <path
              data-v-91efa64a=""
              d="M87.6118 96.2839L87.4896 96.5537L90.521 107.867L90.8444 108.348L100.029 83.622L87.6118 96.2839Z"
              fill="white"
              fill-opacity="0.68"
            ></path>
            <path
              data-v-91efa64a=""
              d="M90.8442 108.347L87.6116 96.2828L70.5361 91.5234L90.8442 108.347Z"
              fill="white"
              fill-opacity="0.333"
            ></path>
            <path
              data-v-91efa64a=""
              d="M86.8636 93.4904L99.2704 80.8267L82.7334 78.0762L86.8636 93.4904Z"
              fill="white"
            ></path>
            <path
              data-v-91efa64a=""
              d="M69.7876 88.7279L86.864 93.4916L82.7338 78.0773L69.7876 88.7279Z"
              fill="white"
              fill-opacity="0.68"
            ></path>
          </g>
          <defs data-v-91efa64a="">
            <filter
              data-v-91efa64a=""
              id="filter0_i-477343"
              x="0"
              y="0"
              width="168"
              height="168"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood
                data-v-91efa64a=""
                flood-opacity="0"
                result="BackgroundImageFix"
              ></feFlood>
              <feBlend
                data-v-91efa64a=""
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feColorMatrix
                data-v-91efa64a=""
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>
              <feOffset data-v-91efa64a=""></feOffset>
              <feGaussianBlur
                data-v-91efa64a=""
                stdDeviation="23"
              ></feGaussianBlur>
              <feComposite
                data-v-91efa64a=""
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              ></feComposite>
              <feColorMatrix
                data-v-91efa64a=""
                type="matrix"
                values="0 0 0 0 0.917667 0 0 0 0 0.683333 0 0 0 0 1 0 0 0 0.42 0"
              ></feColorMatrix>
              <feBlend
                data-v-91efa64a=""
                mode="normal"
                in2="shape"
                result="effect1_innerShadow"
              ></feBlend>
            </filter>
            <radialGradient
              data-v-91efa64a=""
              id="paint0_radial-275648"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(14.7738 85.4778) rotate(-1.40027) scale(165.287 178.67)"
            >
              <stop data-v-91efa64a="" stop-color="#386480"></stop>
              <stop
                data-v-91efa64a=""
                offset="0.682292"
                stop-color="#5B4BB9"
              ></stop>
              <stop
                data-v-91efa64a=""
                offset="0.932292"
                stop-color="#F9FDFF"
              ></stop>
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Bitcoin */}
      <div class="group absolute top-[35%] right-[-10%] w-[100px] pt-10 transition-all duration-200 ease-in hover:scale-105 sm:top-[40%] sm:w-[150px] lg:right-[2%]">
        <p class="relative isolate mx-auto mb-3 w-fit translate-y-10 rounded-lg bg-white p-2 text-xs text-black opacity-0 transition-all duration-150 ease-in after:absolute after:left-1/2 after:top-6 after:-z-10 after:h-3 after:w-3 after:-translate-x-1/2 after:rotate-[45deg] after:bg-white after:content-[''] group-hover:translate-y-0 group-hover:opacity-100">
          Bitcoin
        </p>
        <svg
          data-v-91efa64a=""
          viewBox="0 0 179 178"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g data-v-91efa64a="" filter="url(#filter0_i-141938)">
            <path
              data-v-91efa64a=""
              d="M53.2509 170.25C98.1603 190.11 150.666 169.803 170.526 124.894C190.386 79.9846 170.08 27.4786 125.17 7.6186C80.261 -12.2414 27.755 8.06511 7.89497 52.9745C-11.9651 97.8839 8.34148 150.39 53.2509 170.25Z"
              fill="url(#paint0_radial-603119)"
            ></path>
          </g>
          <path
            data-v-91efa64a=""
            d="M108.37 83.6923C109.187 78.1583 105.028 75.1834 99.3406 73.1988L101.185 65.7024L96.681 64.5652L94.8849 71.8641C93.7007 71.5651 92.4845 71.2831 91.2759 71.0037L93.0849 63.6567L88.583 62.5195L86.7368 70.0134C85.7567 69.7872 84.7944 69.5637 83.8604 69.3284L83.8656 69.305L77.6535 67.7338L76.4552 72.6075C76.4552 72.6075 79.7973 73.3834 79.7268 73.4315C81.5511 73.8928 81.8809 75.1158 81.8257 76.0854L79.7242 84.6254C79.8499 84.6579 80.0129 84.7047 80.1925 84.7775C80.0424 84.7398 79.882 84.6982 79.7165 84.6579L76.7708 96.6212C76.5476 97.1827 75.9818 98.0249 74.7066 97.7052C74.7515 97.7714 71.4325 96.8773 71.4325 96.8773L69.1963 102.101L75.0581 103.581C76.1486 103.858 77.2173 104.148 78.2693 104.42L76.4052 112.003L80.9045 113.14L82.7507 105.638C83.9798 105.976 85.1729 106.288 86.3404 106.582L84.5006 114.048L89.0051 115.186L90.8692 107.618C98.5503 109.09 104.326 108.496 106.757 101.459C108.716 95.7921 106.66 92.5234 102.619 90.392C105.562 89.7045 107.779 87.7433 108.37 83.6923V83.6923ZM98.0781 98.3121C96.6861 103.979 87.268 100.915 84.2145 100.147L86.6881 90.1022C89.7415 90.8742 99.533 92.4026 98.0781 98.3121ZM99.4714 83.6104C98.2013 88.7648 90.3625 86.146 87.8196 85.504L90.0622 76.3934C92.6051 77.0354 100.794 78.2337 99.4714 83.6104V83.6104Z"
            fill="url(#paint1_linear-622963)"
          ></path>
          <defs data-v-91efa64a="">
            <filter
              data-v-91efa64a=""
              id="filter0_i-141938"
              x="0.276367"
              y="0"
              width="177.869"
              height="177.869"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood
                data-v-91efa64a=""
                flood-opacity="0"
                result="BackgroundImageFix"
              ></feFlood>
              <feBlend
                data-v-91efa64a=""
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feColorMatrix
                data-v-91efa64a=""
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>
              <feOffset data-v-91efa64a=""></feOffset>
              <feGaussianBlur
                data-v-91efa64a=""
                stdDeviation="12.6198"
              ></feGaussianBlur>
              <feComposite
                data-v-91efa64a=""
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              ></feComposite>
              <feColorMatrix
                data-v-91efa64a=""
                type="matrix"
                values="0 0 0 0 0.917667 0 0 0 0 0.683333 0 0 0 0 1 0 0 0 0.65 0"
              ></feColorMatrix>
              <feBlend
                data-v-91efa64a=""
                mode="normal"
                in2="shape"
                result="effect1_innerShadow"
              ></feBlend>
            </filter>
            <radialGradient
              data-v-91efa64a=""
              id="paint0_radial-603119"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(161.911 79.5071) rotate(172.789) scale(174.997 159.034)"
            >
              <stop data-v-91efa64a="" stop-color="#FF994F"></stop>
              <stop
                data-v-91efa64a=""
                offset="0.71875"
                stop-color="#EB6E53"
              ></stop>
              <stop
                data-v-91efa64a=""
                offset="0.895833"
                stop-color="#DEFFFB"
              ></stop>
            </radialGradient>
            <linearGradient
              data-v-91efa64a=""
              id="paint1_linear-622963"
              x1="69.5324"
              y1="71.4112"
              x2="108.09"
              y2="115.611"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                data-v-91efa64a=""
                stop-color="#6F3500"
                stop-opacity="0.34"
              ></stop>
              <stop
                data-v-91efa64a=""
                offset="1"
                stop-color="#B55700"
                stop-opacity="0"
              ></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Crypto.com */}
      <div class="group absolute top-[40%] left-[-5%] w-[100px] pt-10 transition-all duration-200 ease-in hover:scale-105 sm:top-[55%] sm:w-[150px] md:left-[10%] lg:left-[25%] lg:top-[80%]">
        <p class="relative isolate mx-auto mb-3 w-fit translate-y-10 rounded-lg bg-white p-2 text-xs text-black opacity-0 transition-all duration-150 ease-in after:absolute after:left-1/2 after:top-6 after:-z-10 after:h-3 after:w-3 after:-translate-x-1/2 after:rotate-[45deg] after:bg-white after:content-[''] group-hover:translate-y-0 group-hover:opacity-100">
          Crypto.com
        </p>
        <svg
          data-v-91efa64a=""
          viewBox="0 0 198 198"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            data-v-91efa64a=""
            d="M179.592 156.484C211.339 111.975 200.994 50.1558 156.484 18.4082C111.975 -13.3394 50.1558 -2.99377 18.4082 41.5159C-13.3394 86.0255 -2.99378 147.844 41.5159 179.592C86.0255 211.339 147.844 200.994 179.592 156.484Z"
            fill="url(#paint0_radial-041919)"
          ></path>
          <path
            data-v-91efa64a=""
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M119.011 83.1063L95.0352 73.369L74.614 89.2628L78.1683 114.894L102.144 124.631L122.565 108.737L119.011 83.1063ZM117.32 84.4224L95.3295 75.4914L76.5993 90.0691L79.8592 113.578L101.849 122.509L120.58 107.931L117.32 84.4224Z"
            fill="url(#paint1_linear-753883)"
          ></path>
          <path
            data-v-91efa64a=""
            d="M87.5387 85.6679L86.8155 95.2527L108.285 92.2756L104.981 83.2492L87.5387 85.6679Z"
            fill="url(#paint2_linear-126392)"
          ></path>
          <path
            data-v-91efa64a=""
            d="M94.8791 100.402L94.9609 105.993L104.049 104.732L102.607 99.3304L103.914 94.1573L92.2135 95.7798L94.8791 100.402Z"
            fill="url(#paint3_linear-845331)"
          ></path>
          <path
            data-v-91efa64a=""
            d="M93.0287 100.659L87.223 98.1913L82.043 103.236L91.9989 115.832L95.3186 115.372L98.5439 111.43L98.3024 109.689L93.8513 106.59L93.0287 100.659Z"
            fill="url(#paint4_linear-823570)"
          ></path>
          <path
            data-v-91efa64a=""
            d="M104.457 99.0738L109.372 95.1198L115.73 98.5645L109.577 113.395L106.257 113.855L102.081 110.94L101.84 109.199L105.28 105.005L104.457 99.0738Z"
            fill="url(#paint5_linear-168400)"
          ></path>
          <defs data-v-91efa64a="">
            <radialGradient
              data-v-91efa64a=""
              id="paint0_radial-041919"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(0.391836 172.375) rotate(-34.6141) scale(240.519)"
            >
              <stop
                data-v-91efa64a=""
                offset="0.473925"
                stop-color="#07090F"
              ></stop>
              <stop
                data-v-91efa64a=""
                offset="0.702566"
                stop-color="#07193E"
              ></stop>
              <stop
                data-v-91efa64a=""
                offset="0.926338"
                stop-color="#015980"
              ></stop>
            </radialGradient>
            <linearGradient
              data-v-91efa64a=""
              id="paint1_linear-753883"
              x1="120"
              y1="74"
              x2="73.0002"
              y2="128"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                data-v-91efa64a=""
                stop-color="#68DBFF"
                stop-opacity="0.26"
              ></stop>
              <stop
                data-v-91efa64a=""
                offset="1"
                stop-color="#48D3FF"
                stop-opacity="0"
              ></stop>
            </linearGradient>
            <linearGradient
              data-v-91efa64a=""
              id="paint2_linear-126392"
              x1="120"
              y1="74"
              x2="73.0002"
              y2="128"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                data-v-91efa64a=""
                stop-color="#68DBFF"
                stop-opacity="0.26"
              ></stop>
              <stop
                data-v-91efa64a=""
                offset="1"
                stop-color="#48D3FF"
                stop-opacity="0"
              ></stop>
            </linearGradient>
            <linearGradient
              data-v-91efa64a=""
              id="paint3_linear-845331"
              x1="120"
              y1="74"
              x2="73.0002"
              y2="128"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                data-v-91efa64a=""
                stop-color="#68DBFF"
                stop-opacity="0.26"
              ></stop>
              <stop
                data-v-91efa64a=""
                offset="1"
                stop-color="#48D3FF"
                stop-opacity="0"
              ></stop>
            </linearGradient>
            <linearGradient
              data-v-91efa64a=""
              id="paint4_linear-823570"
              x1="120"
              y1="74"
              x2="73.0002"
              y2="128"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                data-v-91efa64a=""
                stop-color="#68DBFF"
                stop-opacity="0.26"
              ></stop>
              <stop
                data-v-91efa64a=""
                offset="1"
                stop-color="#48D3FF"
                stop-opacity="0"
              ></stop>
            </linearGradient>
            <linearGradient
              data-v-91efa64a=""
              id="paint5_linear-168400"
              x1="120"
              y1="74"
              x2="73.0002"
              y2="128"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                data-v-91efa64a=""
                stop-color="#68DBFF"
                stop-opacity="0.26"
              ></stop>
              <stop
                data-v-91efa64a=""
                offset="1"
                stop-color="#48D3FF"
                stop-opacity="0"
              ></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white after:absolute after:left-1/2 after:bottom-0 after:h-[500px] after:w-[1px] after:-translate-x-1/2  after:bg-gradient-to-b after:from-slate-500/0 after:to-slate-400/100 after:content-['']">
        <svg
          data-v-91efa64a=""
          width="15"
          height="15"
          viewBox="0 0 15 15"
          // fill="none"
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
          class="crosshair"
        >
          <path d="M15 7.5H0M7.5 15V0" stroke="currentColor"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
