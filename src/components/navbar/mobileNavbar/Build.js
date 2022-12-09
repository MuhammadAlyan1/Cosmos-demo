import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const Build = () => {
  return (
    <div className="px-6 md:w-[400px] md:rounded-lg md:bg-dark md:p-8 md:text-white">
      <ul className="md:hidden">
        <li className="navElements group">
          <a href="#" className="flex items-center gap-1">
            Tutorials
            <div className="linksIcon">
              <FiArrowUpRight />
            </div>
          </a>
        </li>
        <li className="navElements group">
          <a href="#" className="flex items-center gap-1">
            Documentation
            <div className="linksIcon">
              <FiArrowUpRight />
            </div>
          </a>
        </li>
        <li className="navElements group">
          <a href="#" className="flex items-center gap-1">
            Ignite CLI
            <div className="linksIcon">
              <FiArrowUpRight />
            </div>
          </a>
        </li>
        <li className="navElements group">
          <a href="#" className="flex items-center gap-1">
            Cosmos SDK
            <div className="linksIcon">
              <FiArrowUpRight />
            </div>
          </a>
        </li>
        <li className="navElements group">
          <a href="#" className="flex items-center gap-1">
            IBC
            <div className="linksIcon">
              <FiArrowUpRight />
            </div>
          </a>
        </li>
      </ul>
      <div className="hidden md:grid md:grid-cols-2 md:gap-x-4">
        <div>
          <div className="navElements group">
            <a href="#" className="flex items-center gap-1">
              Developer Portal
              <div className="linksIcon">
                <FiArrowUpRight />
              </div>
            </a>
          </div>
          <div className="navElements group">
            <a href="#" className="flex items-center gap-1">
              Documentation
              <div className="linksIcon">
                <FiArrowUpRight />
              </div>
            </a>
          </div>
        </div>
        <div>
          <a
            href="https://www.ignite.com/cli"
            target="_blank"
            className="flex max-w-[160px] items-center gap-4"
          >
            <div>
              <svg
                width="32"
                height="32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.422 16.615v7.782a.759.759 0 01-.377.656l-4.33 2.396a.374.374 0 01-.565-.326v-7.564a.76.76 0 00-.378-.656l-6.53-3.78a.377.377 0 010-.655l4.327-2.398a.755.755 0 01.755 0l6.716 3.89a.756.756 0 01.377.655"
                  fill="#fff"
                />
                <path
                  d="M25.98 10.486v12.336a.776.776 0 01-.387.67l-5.92 3.426a.384.384 0 01-.578-.334V14.472a.778.778 0 00-.386-.671L8.246 7.746a.386.386 0 010-.67l5.93-3.429a.772.772 0 01.772 0L25.6 9.817a.774.774 0 01.388.669"
                  fill="#fff"
                />
              </svg>
            </div>
            <div>
              <div className="navElements group">
                <p className="flex items-center gap-1">
                  Ignite CLI
                  <div className="linksIcon">
                    <FiArrowUpRight />
                  </div>
                </p>
                <p className="pt-2 text-xs text-slate-400">
                  Build a blockchain in minutes
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://v1.cosmos.network/sdk"
            target="_blank"
            className="flex max-w-[160px] items-center gap-4"
          >
            <div>
              <svg
                width="24"
                height="25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.36 8.474v-3.6l3.119-1.8 3.117 1.8v3.6l-3.117 1.8-3.118-1.8zm-.361.54l-3.118 1.8v3.6l3.118 1.8 3.117-1.8v-3.6L12 9.014zm0 1.247l2.037 1.177v2.353L12 14.967l-2.04-1.176v-2.353l2.038-1.177zm3.842 4.153l3.118 1.8 3.117-1.8v-3.6l-3.117-1.8-3.118 1.8v3.6zm3.118.553l-2.038-1.176v-2.353l2.038-1.177 2.037 1.177v2.353l-2.037 1.176zm-7.323 5.507v-3.6l-3.117-1.8-3.118 1.8v3.6l3.118 1.8 3.117-1.8zm-3.117.553l2.037-1.176v-2.353L8.52 16.32l-2.04 1.178v2.353l2.038 1.176zm-.363-6.613v-3.6l-3.117-1.8-3.118 1.8v3.6l3.118 1.8 3.117-1.8zm-1.08-2.976v2.353L5.04 14.967 3 13.791v-2.353l2.038-1.177 2.037 1.177zm1.443-1.164l3.117-1.8v-3.6l-3.117-1.8-3.118 1.8v3.6l3.118 1.8zm2.037-2.423L8.52 9.027 6.48 7.851V5.498L8.519 4.32l2.037 1.177V7.85zm1.805 12.623l3.118 1.8 3.117-1.8v-3.6l-3.117-1.8-3.118 1.8v3.6zm1.08-.623v-2.353l2.038-1.177 2.037 1.177v2.353l-2.037 1.176-2.038-1.176zm4.075-12L15.48 9.027l-2.04-1.176V5.498l2.038-1.177 2.037 1.177V7.85z"
                  fill="#fff"
                />
              </svg>
            </div>
            <div>
              <div className="navElements group">
                <p className="flex items-center gap-1">
                  Cosmos SDK
                  <div className="linksIcon">
                    <FiArrowUpRight />
                  </div>
                </p>
                <p className="pt-2 text-xs text-slate-400">
                  Build or extend a blockchain
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://ibcprotocol.org/"
            target="_blank"
            className="flex max-w-[160px] items-center gap-4"
          >
            <div>
              <svg
                width="24"
                height="25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.358 6.828a2.398 2.398 0 01-.948-.516L5.654 14.95c.35.113.667.305.927.555l4.777-8.677zM7.27 16.755a2.402 2.402 0 01-.027 1.08h9.572a2.399 2.399 0 01-.028-1.08H7.271zm6.325-10.449l4.8 8.646c-.35.115-.665.308-.924.559l-4.823-8.686c.356-.1.678-.28.947-.52z"
                  fill="#fff"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.12 16.296a.921.921 0 000 1.841.921.921 0 000-1.84zm0 2.943a2.024 2.024 0 01-2.021-2.022c0-1.115.906-2.022 2.02-2.022 1.115 0 2.021.907 2.021 2.022a2.024 2.024 0 01-2.02 2.022zM11.98 3.576a.921.921 0 000 1.841.921.921 0 000-1.84zm0 2.943a2.024 2.024 0 01-2.021-2.022c0-1.115.906-2.022 2.02-2.022 1.115 0 2.021.907 2.021 2.022a2.024 2.024 0 01-2.02 2.022zM4.9 16.296a.921.921 0 000 1.841.921.921 0 000-1.84zm0 2.943a2.024 2.024 0 01-2.021-2.022c0-1.115.906-2.022 2.02-2.022 1.115 0 2.021.907 2.021 2.022a2.024 2.024 0 01-2.02 2.022z"
                  fill="#fff"
                />
              </svg>
            </div>
            <div>
              <div className="navElements group">
                <p className="flex items-center gap-1">
                  IBC
                  <div className="linksIcon">
                    <FiArrowUpRight />
                  </div>
                </p>
                <p className="pt-2 text-xs text-slate-400">
                  Connect blockchains
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Build;
