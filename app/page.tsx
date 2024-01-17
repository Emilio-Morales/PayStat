import PayStat from '@/app/ui/paystat-logo';
import { ArrowRightIcon, CubeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import { Metadata } from 'next';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import HeroImage from '@/public/hero-desktop2.png';
import PayStatLogo from '@/app/ui/paystat-logo';
import { Button } from './ui/button';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default function Page() {
  return (
    <main className="relative isolate overflow-hidden bg-white">
      {/* <div className="px-6">
        <div className="flex h-20 shrink-0 items-end rounded-lg bg-rose-900 p-4 md:h-52">
          <PayStatLogo />
        </div>
      </div> */}
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
        />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          {/* <img
            className="h-11"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          /> */}
          <CubeIcon className="h-24 rotate-[15deg] text-rose-700" />
          {/* <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-rose-900/10 px-3 py-1 text-sm font-semibold leading-6 text-rose-900 ring-1 ring-inset ring-rose-900/10">
                What's new
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                <span>Just shipped v1.0</span>
                <ChevronRightIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </a>
          </div> */}
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            PayStat: Simplify Invoice Management and Track Revenue
          </h1>
          <p
            className={`${lusitana.className} mt-6 text-lg leading-8 text-gray-600`}
          >
            PayStat empowers you to effortlessly manage customer invoices and
            gain valuable insights into your revenue trends.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="/login"
              className="flex h-10 items-center rounded-lg bg-rose-800 px-4 text-sm font-medium text-white transition-colors hover:bg-rose-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-800 active:bg-rose-900 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
            >
              Get Started
            </Link>

            {/* <a
              href="#"
              className="rounded-md bg-rose-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-900"
            >
              Get started
            </a> */}
            <a
              href="https://emiliomoralesportfolio.com/"
              className="text-sm font-semibold leading-6 text-gray-900"
              target="_blank"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              {/* <img
                src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                alt="App screenshot"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              /> */}
              <Image
                // src="/hero-desktop2.png"
                src={HeroImage}
                alt="App screenshot"
                // width={2432}
                // height={1442}
                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
    // <main className="flex min-h-screen flex-col p-6">
    //   <div className="flex h-20 shrink-0 items-end rounded-lg bg-rose-900 p-4 md:h-52">
    //     <PayStatLogo />
    //   </div>
    //   <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
    //     <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
    //       <div className={styles.shape} />
    //       <p
    //         className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal `}
    //       >
    //         <strong>Welcome to Acme.</strong> This is the example for the{' '}
    //         <a href="https://nextjs.org/learn/" className="text-rose-500">
    //           Next.js Learn Course
    //         </a>
    //         , brought to you by Vercel.
    //       </p>
    //       <Link
    //         href="/login"
    //         className="flex items-center gap-5 self-start rounded-lg bg-rose-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-rose-400 md:text-base"
    //       >
    //         <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
    //       </Link>
    //     </div>
    //     <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
    //       {/* Add Hero Images Here */}
    //       <Image
    //         src="/hero-desktop.png"
    //         width={1000}
    //         height={760}
    //         className="hidden md:block"
    //         alt="Screenshots of the dashboard project showing desktop version"
    //       />

    //       <Image
    //         src="/hero-mobile.png"
    //         width={560}
    //         height={620}
    //         className="md:hidden"
    //         alt="Screenshots of the dashboard project showing mobile version"
    //       />
    //     </div>
    //   </div>
    // </main>
  );
}
